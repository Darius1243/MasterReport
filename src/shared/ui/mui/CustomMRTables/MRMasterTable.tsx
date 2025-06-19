// import { EditComponents } from './EditComponents'
// import { FullscreenModal } from './FullscreenModal'
// import { MRTableV2 } from './MRTableV2'
// import { RenderAdditionalFields } from './RenderAdditionalFields'

// interface MRMasterTableProps {
// 	elements: ISchemaWidget
// 	crudOptions: ICrud
// 	customData?: TData
// 	title?: string
// 	ids?: IIds
// 	isInWidget?: boolean
// 	externalIsEditable?: boolean
// 	getCudData?: unknown
// 	setCustomData?: unknown
// 	parentRow?: MRT_RowData
// 	isLoading?: boolean
// 	methodType?: 'add' | 'edit'
// 	isInTabWidget?: boolean
// 	handleToggleHeight?: (widgetName: string, height: number) => void
// }

// export const MRMasterTable = forwardRef<unknown, MRMasterTableProps>(
// 	(props, ref) => {
// 		const {
// 			elements,
// 			crudOptions,
// 			title = '',
// 			ids = [],
// 			isInWidget = false,
// 			externalIsEditable = false,
// 			getCudData = undefined,
// 			setCustomData = undefined,
// 			parentRow = {},
// 			isLoading,
// 			methodType,
// 			isInTabWidget,
// 			handleToggleHeight,
// 			customData,
// 			...rest
// 		} = props

// 		const enabled = methodType !== 'add'
// 		const firstBlock = elements.blocks[0] ?? {}

// 		const {
// 			widgetName,
// 			label,
// 			dialogBeforeSave,
// 			enableRowNumbers,
// 			enableSaveData,
// 			beforeSave,
// 			beforeDelete,
// 			additionalFields,
// 			fields,
// 			forms,
// 			...restProps
// 		} = firstBlock

// 		const queryClient = useQueryClient()
// 		const showDevInfo = useAppStore(state => state.showDevInfo)
// 		const [cudRows, setCudRows] = useState<TData[]>([])
// 		const [data, setData] = useState<MRT_RowData[]>([])
// 		const [wordWrap, setWordWrap] = useState(true)
// 		const [validationErrors, setValidationErrors] = useState({})
// 		const dataRef = useRef<MRT_RowData[]>([])
// 		const cudRowsRef = useRef(cudRows)

// 		const isErrorsEmpty = Object.values(validationErrors).some(
// 			error => error && !(typeof error === 'object' && error.allowSave)
// 		)
// 		const isDirty = cudRows?.length > 0
// 		const isValid = !isErrorsEmpty
// 		const isVisible = isValid && isDirty

// 		const primaryKey = crudOptions.primaryKey
// 		const enableSaveButton = !!(
// 			(enableSaveData ?? true) &&
// 			(!ref || isInTabWidget)
// 		)
// 		const sequenceName =
// 			enableRowNumbers || fields?.some(field => field.name === SEQUENCE_NO)
// 				? SEQUENCE_NO
// 				: firstBlock.sequenceName
// 		const addRowMethod = firstBlock.addRowMethod ?? AddRowMethods.ROW

// 		const {
// 			etalonData,
// 			isLoading,
// 			isError,
// 			error,
// 			refetch,
// 			mutationAsync,
// 			elementsOption,
// 			autocompleteData,
// 			isLoadingFieldsOptions,
// 			isErrorFieldsOptions,
// 			refetchFieldsOptions,
// 		} = useCRUD({
// 			ids,
// 			options: crudOptions,
// 			elements,
// 			enabled: !setCustomData && enabled,
// 			ref: isInTabWidget ? null : ref,
// 			setData,
// 		})

// 		useEffect(() => {
// 			dataRef.current = customData ?? data
// 			cudRowsRef.current = cudRows
// 		}, [cudRows, data, customData])

// 		useEffect(() => {
// 			if (customData) setData(customData)
// 		}, [customData])

// 		const convertedData = etalonData =>
// 			convertedMRTData({ etalonData, elements })

// 		const transformData = (_, injectionKeys) => {
// 			const _cudRows = cudRowsRef?.current
// 			const _etalonData = !isEmpty(etalonData) ? etalonData : dataRef.current
// 			const newCudRows = MRTReversDataFormatting({ data: _cudRows, elements })
// 			const submitData = injectionKeys
// 				? newCudRows.map(row => ({ ...row, ...injectionKeys }))
// 				: newCudRows

// 			return { submitData, _etalonData, data: dataRef.current }
// 		}

// 		const {
// 			isOpenConfirmBeforeSaveDialog,
// 			dialogData,
// 			onCloseConfirmBeforeSaveDialog,
// 			onBeforeSave,
// 		} = useBeforeSave({
// 			beforeSave,
// 			transformData,
// 			dialogBeforeSave,
// 			parentRow,
// 		})

// 		const onSubmit = async (
// 			data: MRT_RowData[],
// 			injectionKeys: Record<string, unknown>
// 		) => {
// 			if (!ref && beforeSave) {
// 				const onBeforeSaveResult = await onBeforeSave(data, injectionKeys)
// 				if (!onBeforeSaveResult) return
// 			}

// 			const { submitData, _etalonData } = transformData(data, injectionKeys)

// 			setData(convertedData(_etalonData))
// 			setCudRows([])
// 			const res = (await mutationAsync(submitData)) as []

// 			switch (crudOptions.afterAction?.type) {
// 				// Invalidate cache optional
// 				case 'refetch': {
// 					queryClient.invalidateQueries({
// 						queryKey: crudOptions.afterAction?.key,
// 					})
// 					break
// 				}
// 				case 'refetch-page-after-create': {
// 					if (res?.some(r => r.status === 201)) window.location.reload()
// 					break
// 				}
// 				default:
// 					break
// 			}

// 			return res
// 		}

// 		const onCancelData = (data: MRT_RowData[]) => {
// 			setData(convertedData(data ?? etalonData ?? []))
// 			setCudRows([])
// 		}

// 		const handleSaveCell = ({
// 			value,
// 			cell,
// 			type,
// 			validationSchema = undefined,
// 			table = undefined,
// 			autocompleteData = undefined,
// 		}) => {
// 			MRTHandleSaveCellV2({
// 				value,
// 				type,
// 				data,
// 				setData,
// 				setCudRows,
// 				cell,
// 				getCudData,
// 				primaryKey,
// 				autocompleteData,
// 				table,
// 				validationSchema,
// 				setValidationErrors,
// 			})
// 		}

// 		const editComponents = EditComponents({
// 			ids,
// 			autocompleteData,
// 			elements,
// 			elementsOption,
// 			handleSaveCell,
// 			isLoadingFieldsOptions,
// 			isErrorFieldsOptions,
// 			refetchFieldsOptions,
// 			validationErrors,
// 			setValidationErrors,
// 			parentRow,
// 		})

// 		const {
// 			isFullscreen,
// 			onDeactivateEditable,
// 			isOpenYesNoCancelDialog,
// 			onCloseYesNoCancelDialog,
// 		} = useSaveDataTable({
// 			data,
// 			setData,
// 			onSubmit,
// 			isDirty,
// 			setCudRows,
// 			isInWidget,
// 		})

// 		const isEditable = isFullscreen || externalIsEditable

// 		const columns = getMRTColumns({
// 			elements,
// 			isEditable,
// 			editComponents,
// 			handleSaveCell,
// 			validationErrors,
// 			showDevInfo,
// 			setValidationErrors,
// 		})

// 		const { hidingColumns, isColumnsLoading } = useGetColumnsVisibility()

// 		useCustomImperativeHandle({
// 			ref,
// 			crudOptions,
// 			onSubmit,
// 			onBeforeSave,
// 			isValid,
// 			isDirty,
// 			onCancelData,
// 			componentType: 'table',
// 			etalonData,
// 		})

// 		if ((isInTabWidget || isInWidget) && isColumnsLoading) return

// 		return (
// 			<FullscreenModal open={isFullscreen}>
// 				<MasterFormsIntoMRTable
// 					ids={ids}
// 					forms={forms}
// 					isEditable={isEditable}
// 				/>

// 				{showDevInfo ? (
// 					<pre>{JSON.stringify(getTablesName(crudOptions))}</pre>
// 				) : null}

// 				<MRTableV2
// 					data={data}
// 					setData={setData}
// 					setCudRows={setCudRows}
// 					columns={columns}
// 					title={label || title}
// 					sequenceName={sequenceName}
// 					enableRowNumbers={enableRowNumbers}
// 					columnVisibility={hidingColumns?.[elements.widgetName]}
// 					isEditable={isEditable}
// 					isFullscreen={isFullscreen}
// 					widgetName={elements.widgetName}
// 					onDeactivateEditable={onDeactivateEditable}
// 					isError={isError}
// 					isLoading={isLoading || !!isLoading || isColumnsLoading}
// 					error={error}
// 					refetch={refetch}
// 					wordWrap={wordWrap}
// 					setWordWrap={setWordWrap}
// 					addRowMethod={addRowMethod}
// 					isInWidget={isInWidget}
// 					disabledSaveButton={!isVisible}
// 					enableSaveData={enableSaveButton}
// 					handleToggleHeight={handleToggleHeight}
// 					primaryKey={primaryKey}
// 					handleSaveData={async () => await onSubmit([], {})}
// 					handleAddRow={async (table, columns) => {
// 						await MRTAddRowV2({
// 							data,
// 							setData,
// 							table,
// 							columns,
// 							addRowMethod,
// 							sequenceName,
// 							elements,
// 							setCudRows,
// 							getCudData,
// 						})
// 					}}
// 					handleAddRows={(table, rows) => {
// 						MRTAddRowsV2({
// 							table,
// 							setData,
// 							rows,
// 							setCudRows,
// 							getCudData,
// 							sequenceName,
// 						})
// 					}}
// 					// onCreatingRowSave={({ table, values }) => {
// 					// 	MRTSaveRowV2({ table, setData, values, setCudRows, getCudData, sequenceName })
// 					// }}
// 					handleRemoveRows={(table, filteredSelectedRows) => {
// 						MRTRemoveRowsV2({
// 							table,
// 							setData,
// 							filteredSelectedRows,
// 							setCudRows,
// 							getCudData,
// 							sequenceName,
// 						})
// 					}}
// 					handleBeforeRemove={async table => {
// 						const selectedRows = table.getSelectedRowModel().flatRows
// 						return beforeDelete
// 							? await beforeDelete({ data, selectedRows, primaryKey, ids })
// 							: selectedRows
// 					}}
// 					{...(isInWidget
// 						? {
// 								getRowId: originalRow =>
// 									originalRow?.[crudOptions.primaryKey]
// 										? originalRow?.[crudOptions.primaryKey]
// 										: undefined,
// 						  }
// 						: {})}
// 					{...(additionalFields
// 						? {
// 								renderDetailPanel: ({ row }) => {
// 									const modelKeys = crudOptions.modelKeys?.reduce(
// 										(acc, key) => {
// 											acc[key] = row.original[key]
// 											return acc
// 										},
// 										{}
// 									)

// 									const newIds = getNewIdsByRow(row, ids, primaryKey, modelKeys)

// 									return (
// 										<RenderAdditionalFields
// 											ids={newIds}
// 											additionalFields={additionalFields}
// 											elementsOption={elementsOption}
// 											isLoading={isLoading}
// 											isEditable={isEditable}
// 											onChangeValue={handleSaveCell}
// 											autocompleteData={autocompleteData}
// 											refetchFieldsOptions={refetchFieldsOptions}
// 											parentRow={{
// 												...row,
// 												original: { ...(parentRow.original ?? parentRow) },
// 											}}
// 											row={{
// 												...row,
// 												original: {
// 													...row.original,
// 												},
// 											}}
// 										/>
// 									)
// 								},
// 						  }
// 						: {})}
// 					{...rest}
// 					{...restProps}
// 				/>

// 				<DialogYesNoCancel
// 					title={'save'}
// 					open={isOpenYesNoCancelDialog}
// 					onClose={onCloseYesNoCancelDialog}
// 					isDisableSaveButton={!isVisible}
// 				>
// 					{!isVisible
// 						? {
// 								messages: [
// 									{
// 										key: 'messages.thereIsInvalidData',
// 										messageType: 'warning',
// 									},
// 								],
// 						  }
// 						: null}
// 				</DialogYesNoCancel>

// 				<DialogYesNoCancel
// 					title={dialogData.title}
// 					open={isOpenConfirmBeforeSaveDialog}
// 					onClose={onCloseConfirmBeforeSaveDialog}
// 					isOnlyOk
// 				>
// 					{dialogData.message}
// 				</DialogYesNoCancel>
// 			</FullscreenModal>
// 		)
// 	}
// )

// function getNewIdsByRow(row, ids, primaryKey, modelKeys = {}) {
// 	if (!primaryKey) return { ...ids, ...modelKeys }

// 	return { ...ids, [primaryKey]: row.original[primaryKey], ...modelKeys }
// }
