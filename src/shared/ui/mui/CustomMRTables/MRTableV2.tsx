import {
	callSnackbarError,
	callSnackbarInfo,
	callSnackbarSuccess,
	handleRowSelectionInViewMode,
	sort,
	sortData,
} from '@/helper'
import { useInitMenuDotsTable } from '@/hooks'
import { AddRowMethods, MRTableV2Props } from '@/interfaces'
import { StorageService } from '@/services/StorageService'
import { useAppStore } from '@/store'
import { RefetchButton } from '@components/customComponents/Button'
import { COLOR_FOR_TOTAL_FIELDS, IS_MAC_OS, ROW_HEIGHT } from '@constants/Constants'
import Ids from '@constants/Ids'
import { Box, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useQueryClient } from '@tanstack/react-query'
import { getEventCode } from '@utils/getEventCode'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { isEqual } from 'lodash'
import {
	MaterialReactTable,
	MRT_Column,
	MRT_RowData,
	MRT_RowSelectionState,
	MRT_SortingState,
	useMaterialReactTable,
} from 'material-react-table'
import { MRT_Localization_EN } from 'material-react-table/locales/en'
import { MRT_Localization_RU } from 'material-react-table/locales/ru'
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary } from '../ErrorBoundary'
import { MuiRowDragHandleProps } from './lib'
import { TopToolbarCustomActions } from './TopToolbarCustomActions'
import { useTableCustomization } from './useTableCustomization'

export const MRTableV2 = ({
	data,
	setData,
	title,
	columns,
	widgetName,
	setCudRows,
	sequenceName = undefined,
	columnVisibility = undefined,
	isError = false,
	isLoading = false,
	isEditable = false,
	isFullscreen = false,
	onDeactivateEditable = undefined,
	error = undefined,
	disabledSaveButton = false,
	enableRowOrdering = false,
	refetch = undefined,
	selectMode = 'multiple',
	state = {},
	enableSorting = true,
	addRowMethod,
	initialState: _initialState = {},
	primaryKey = '',
	isInWidget = false,
	wordWrap = undefined,
	setWordWrap = undefined,
	handleSaveData = undefined,
	handleAddRow = undefined,
	handleAddRows = undefined,
	handleRemoveRows = undefined,
	handleBeforeRemove = undefined,
	handleBeforeSave = undefined,
	enableSaveData = true,
	enableAddRow = true,
	enableSaveCell = true,
	enableRemoveRows = true,
	setRowSelection = undefined,
	editDisplayMode = 'table',
	enableTopToolbar,
	enableCustomColumnFilter = false,
	allowSelectRowInViewMode = true,
	handleToggleHeight,
	editingRow,
	...props
}: MRTableV2Props) => {
	const queryClient = useQueryClient()

	const [_rowSelection, _setRowSelection] = useState<MRT_RowSelectionState>({})
	const { i18n, t } = useTranslation()
	const { columnVisibility: initialVisibility, ...initialState } = { ..._initialState }

	const combinedVisibility = {
		...columnVisibility,
		...(initialVisibility !== undefined ? { ...initialVisibility } : {}),
	}

	initialState.sorting = [
		...(sequenceName ? [{ id: sequenceName, desc: false }] : []),
		...(initialState.sorting ?? []),
	]

	const disabled = isLoading || isError
	const currentLocale = i18n.language === 'ru' ? MRT_Localization_RU : MRT_Localization_EN
	const enableRowSelection = (isEditable && !!handleRemoveRows && enableRemoveRows) || props.enableRowSelection
	const [focusedRow, setFocusedRow] = useState<string>()
	const [globalFilter, setGlobalFilter] = useState('')
	const [sorting, setSorting] = useState<MRT_SortingState>(initialState.sorting)
	const enableRowVirtualization = !isEditable // data?.length > 15
	const selectedDatum = useAppStore().selectedDatum

	const enablePagination = isEditable && data?.length > 20
	const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })
	const [expanded, setExpanded] = useState({})

	const newColumns = useMemo(() => {
		return columns.map(column => ({
			...column,
			size: isEditable && column.sizeEditMode != null ? column.sizeEditMode : column.size,
		}))
	}, [columns, isEditable])

	const paginatedData = useMemo(() => {
		if (!enablePagination) return data

		const start = pagination.pageIndex * pagination.pageSize
		const end = start + pagination.pageSize

		return data.slice(start, end)
	}, [pagination, enablePagination, isEditable, data])

	dayjs.extend(isSameOrBefore)
	dayjs.extend(isSameOrAfter)

	const table = useMaterialReactTable({
		data: paginatedData || [],
		columns: newColumns,
		onExpandedChange: setExpanded,
		editDisplayMode,
		createDisplayMode: addRowMethod === AddRowMethods.ROW ? 'row' : 'modal',
		layoutMode: 'semantic',
		enableEditing: isEditable && enableSaveCell,
		enableGlobalFilter: true,
		globalFilterFn: 'contains',
		rowCount: data.length,
		columnFilterDisplayMode: enableCustomColumnFilter ? 'popover' : undefined,
		onGlobalFilterChange: setGlobalFilter,
		columnResizeMode: 'onEnd',
		enableSorting,
		enableRowSelection,
		manualSorting: true,
		manualPagination: true,
		onSortingChange: setSorting,
		enableMultiRowSelection: enableRowSelection && selectMode === 'multiple',
		enableTopToolbar: isEditable || enableTopToolbar,
		muiTopToolbarProps: { sx: { display: isEditable || enableTopToolbar ? 'block' : 'none' } },
		rowNumberDisplayMode: 'original',
		enableRowOrdering: isEditable && (!!sequenceName || enableRowOrdering),
		autoResetPageIndex: false,
		enableToolbarInternalActions: false,
		enableGrouping: false,
		enableStickyHeader: true,
		enableStickyFooter: true,
		enableBottomToolbar: enablePagination,
		paginationDisplayMode: 'pages',
		muiPaginationProps: {
			color: 'primary',
			shape: 'rounded',
			showRowsPerPage: false,
			variant: 'outlined',
		},
		onPaginationChange: setPagination,
		getRowId: row => row.id,
		enableRowVirtualization,
		rowVirtualizerOptions: { overscan: 5 },
		enableDensityToggle: false,
		enableColumnActions: false,
		enableColumnResizing: true,
		positionToolbarAlertBanner: 'none',
		muiTableContainerProps: { sx: { flex: 1, maxHeight: '100%' } },
		muiTablePaperProps: { sx: { flex: 1, display: 'flex', flexDirection: 'column' } },
		muiTableProps: { sx: { width: '99.8%' } },
		filterFns: {
			dateFilterFn: (row, id, filterValue) => {
				const currentValue = dayjs(row.original.dateReport)
				const [leftDate, rightDate] = filterValue

				return leftDate || rightDate
					? (!leftDate || currentValue.isSameOrAfter(leftDate)) &&
							(!rightDate || currentValue.isSameOrBefore(rightDate))
					: true
			},
		},
		sortingFns: {
			myCustomSortingFn: (rowA, rowB, columnId) => {
				return sort(rowA.original[columnId], rowB.original[columnId])
			},
			sortRenderedValues: (rowA, rowB, columnId) => {
				return sort(rowA.getValue(columnId), rowB.getValue(columnId))
			},
		},
		muiRowDragHandleProps: ({ table }) => MuiRowDragHandleProps({ table, data, setData, setCudRows }),
		muiSelectCheckboxProps: props => {
			return {
				onClick: _ => {
					if (selectMode === 'single' && enableRowSelection)
						_setRowSelection(prev => ({ [props.row.id]: !prev[props.row.id] }))
				},
			}
		},
		muiTableBodyRowProps: ({ isDetailPanel, row, table }) => {
			return {
				'data-testid': isDetailPanel ? 'TableRowExpand' : 'TableRow',
				onInput: () => {
					if (row.id !== focusedRow) setFocusedRow(row.id)
				},
				onClick: e => {
					setFocusedRow(row.id)
					if (allowSelectRowInViewMode && !isEditable && !isDetailPanel) {
						_setRowSelection(prev => handleRowSelectionInViewMode(e, row, prev))
						return
					}
					if (!setRowSelection) return
					setRowSelection?.(row.original)
					if (!_rowSelection[row.id]) _setRowSelection(prev => ({ [row.id]: !prev[row.id] }))
				},
				onKeyDown: e => {
					if ((e.ctrlKey || (e.metaKey && IS_MAC_OS)) && e.code === 'KeyC' && allowSelectRowInViewMode) {
						e.preventDefault()

						const hasSelectedRows = Object.values(_rowSelection).some(value => value)
						if (!hasSelectedRows) return

						const visibleColumns = table.getAllColumns().map(col => col.id)
						const copyData = table
							.getCoreRowModel()
							.flatRows.filter(row => _rowSelection[row.id])
							.map(row => {
								// удалить все данные, которые не показываются, чтобы не было лишних id
								const filteredData = Object.fromEntries(
									Object.entries(row.original).filter(([key]) => visibleColumns.includes(key)),
								)

								return {
									...filteredData,
									[primaryKey]: primaryKey === Ids.COMPANY_ID ? row.original[primaryKey] : null,
								}
							})

						navigator.clipboard.writeText(JSON.stringify({ fromWidget: widgetName, importData: copyData }))
						callSnackbarInfo(t('messages.copyRows'))
					}
				},
				selected: _rowSelection[row.id],
				sx: {
					cursor: 'pointer',
					backgroundColor: focusedRow == row.id ? '#e8e8e8' : '',
				},
			}
		},
		onRowSelectionChange: props => enableRowSelection && _setRowSelection(props),
		muiExpandButtonProps: ({ row }) => ({
			disabled: isLoading || primaryKey ? !row.original?.[primaryKey] : false,
			name: 'expand-button',
			'test-type': 'expand-button',
			'data-testid': 'ExpandButtonRow',
		}),
		meta: {
			widgetName,
		},
		muiTableBodyCellProps: ({ cell: { column, row } }) => {
			const method = row.original._methodType
			const shouldAddProps =
				!column.columnDef.enableEditing ||
				(column.columnDef.enableEditingOnlyIn && !column.columnDef.enableEditingOnlyIn.includes(method))

			return {
				sx: {
					...column.columnDef.style,
					wordWrap: wordWrap ? 'nowrap' : 'break-word',
					'&:after': leftBorder,
					color: getCellTextColor(column, method),
					backgroundColor: 'white',
				},
				...(isEditable &&
					shouldAddProps && {
						name: column.id,
						readOnly: true,
					}),
			}
		},
		displayColumnDefOptions: {
			'mrt-row-expand': { size: 10 },
		},
		defaultColumn: {
			maxSize: 9001,
			minSize: 60,
			size: 90,
			sortingFn: 'myCustomSortingFn',
		},
		localization: {
			...currentLocale,
			toggleSelectRow: t('mrtLocalization.toggleSelectRow'),
			rowNumber: t('mrtLocalization.rowNumber'),
			move: '',
		},
		initialState: {
			columnVisibility: combinedVisibility,
			columnPinning: { left: ['mrt-row-select', 'mrt-row-actions'] },
			pagination,
			expanded,
			...initialState,
		},
		state: {
			density: isEditable ? 'comfortable' : 'compact',
			isLoading,
			showAlertBanner: isError,
			rowSelection: _rowSelection,
			globalFilter,
			sorting,
			pagination,
			expanded,
			...state,
		},
		muiToolbarAlertBannerProps: isError
			? {
					color: 'error',
					children: (
						<Box display={'flex'} alignItems={'center'} gap={1}>
							<RefetchButton refetch={refetch} />

							<Typography component='span' variant='body1' fontWeight={400}>
								{t('messages.errorLoadingData')}
							</Typography>
						</Box>
					),
				}
			: { sx: { backgroundColor: 'white' } },
		muiTableHeadCellProps: {
			sx: {
				'& .Mui-TableHeadCell-Content-Wrapper': {
					whiteSpace: wordWrap ? 'normal' : 'nowrap',
					overflowWrap: wordWrap ? 'break-word' : 'normal',
				},
				fontWeight: 500,
			},
		},
		renderTopToolbarCustomActions: ({ table }) => (
			<TopToolbarCustomActions
				table={table}
				title={title}
				isFullscreen={isFullscreen}
				onDeactivateEditable={onDeactivateEditable}
				columns={columns}
				handleAddRow={handleAddRow}
				handleAddRows={handleAddRows}
				handleSaveData={handleSaveData}
				handleRemoveRows={handleRemoveRows}
				handleBeforeRemove={handleBeforeRemove}
				handleBeforeSave={handleBeforeSave}
				enableSaveData={enableSaveData}
				enableAddRow={enableAddRow}
				enableRemoveRows={enableRemoveRows}
				isEditable={isEditable}
				disabled={disabled}
				disabledSaveButton={disabledSaveButton}
				wordWrap={wordWrap}
				setWordWrap={setWordWrap}
				setGlobalFilter={setGlobalFilter}
				onPasteRowsToTable={onPasteRowsToTable}
				allowImport={props.allowImport}
				canAddNewRow={props.canAddNewRow}
			/>
		),
		...props,
	})

	useEffect(() => {
		if (editingRow) {
			const foundedRow = table
				.getCoreRowModel()
				.flatRows.find(item => item.original.attachmentId === editingRow.attachmentId)

			table.setEditingRow(foundedRow)
		}
	}, [editingRow])

	const getCellTextColor = (column: MRT_Column<MRT_RowData, unknown>, method: string) => {
		return !isEditable || (column.columnDef.enableEditing && column.columnDef.enableEditingOnlyIn?.includes(method))
			? null
			: COLOR_FOR_TOTAL_FIELDS
	}

	useTableCustomization({ table })

	const setVisibleColumnsForWidget = () => {
		const eventCode = getEventCode()

		const updatedHiddenColumns = Object.entries(table.getState().columnVisibility)
			.filter(([_, isVisible]) => !isVisible)
			.reduce((acc, [key]) => {
				acc[key] = false
				return acc
			}, {})

		StorageService.set(queryClient, `tables_${eventCode}`, { [widgetName]: updatedHiddenColumns })
	}

	const isAllValuesNull = (data: any[]) => {
		return data.every(obj => Object.values(obj).every(value => value === null))
	}

	useEffect(() => {
		table.resetRowSelection()
		setFocusedRow('')

		const getDataFromRows = tableRows => tableRows.map(row => row.original)

		requestIdleCallback(() => {
			const tableRows = table.getCoreRowModel().flatRows
			const dataRows = getDataFromRows(tableRows)

			if (isAllValuesNull(dataRows)) return

			const sortingColumn = table.getAllColumns().find(col => col.id === sorting[0]?.id)
			const desc = sorting[0]?.desc
			const customSortingFn = sortingColumn?.columnDef.sortingFn

			if (typeof customSortingFn === 'function') {
				const sortedTableRows = tableRows.sort((a, b) => customSortingFn?.(a, b, sortingColumn.id))
				const sortedData = getDataFromRows(desc ? sortedTableRows.reverse() : sortedTableRows)
				setData?.(sortedData)
				return
			}

			const defaultSortedData = sortData(dataRows, sortingColumn?.id, desc)
			if (defaultSortedData) setData?.(defaultSortedData)
		})
	}, [sorting, table, selectedDatum])

	useEffect(() => {
		if (isEqual(table.getState().columnVisibility, combinedVisibility)) return
		setVisibleColumnsForWidget()
	}, [table.getState().columnVisibility])

	useEffect(() => {
		if (table.getState().isLoading) table.resetSorting()
	}, [table.getState().isLoading])

	if (isInWidget) {
		useInitMenuDotsTable({ table, wordWrap, setWordWrap, setGlobalFilter })
	}

	const onPasteRowsToTable = rows => {
		if (rows.fromWidget) {
			const allowPaste = rows.fromWidget === widgetName

			if (!allowPaste) {
				callSnackbarError(t('messages.insertRowsInWrongTable'))
				return
			}

			callSnackbarSuccess(t('messages.successInsertRows'))
			handleAddRows?.(table, rows.importData)
		} else {
			handleAddRows?.(table, rows)
		}
	}

	const tableRef = useRef(null)
	const expandedRowsLength = Object.keys(expanded).length

	useEffect(() => {
		if (!tableRef.current || !handleToggleHeight) return
		if (!expandedRowsLength) {
			handleToggleHeight(widgetName, 0)
			return
		}

		const resizeObserver = new ResizeObserver(() => {
			const tableHeight = tableRef.current.getBoundingClientRect().height
			const height = Math.ceil(tableHeight / (ROW_HEIGHT * 3))
			handleToggleHeight(widgetName, height)
		})

		resizeObserver.observe(tableRef.current)

		return () => resizeObserver.disconnect()
	}, [expandedRowsLength])

	return (
		<ErrorBoundary error={error} refetch={refetch}>
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={i18n.language}>
				<div ref={tableRef} style={expandedRowsLength ? {} : refContainerStyles}>
					<MaterialReactTable table={table} />
				</div>
			</LocalizationProvider>
		</ErrorBoundary>
	)
}

const refContainerStyles = {
	width: '100%',
	minHeight: '100%',
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
}

const leftBorder: CSSProperties = {
	display: 'block',
	content: '""',
	position: 'absolute',
	height: '75%',
	top: '15%',
	width: '1px',
	right: '1px',
	backgroundColor: 'rgba(0,0,0,0.05)',
}
