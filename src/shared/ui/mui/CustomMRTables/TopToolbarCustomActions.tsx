import { useIsSmallScreen } from '@/hooks'
import { useAppStore } from '@/store'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InternalActions } from '.'
import { BackDropLoader } from '../BackDropLoader'
import { IconButton, StyledButton } from '../Button'
import { DeleteButtonWithDialog } from '../Button/DeleteButtonWithDialog'
import { ClipboardPasteButtonModal } from './ClipboardPasteButtonModal'
import { DividerSelector } from './DividerSelector'

export const TopToolbarCustomActions = ({
	table,
	title,
	isFullscreen,
	onDeactivateEditable,
	columns,
	handleAddRow,
	handleAddRows,
	handleSaveData,
	handleRemoveRows,
	handleBeforeRemove,
	handleBeforeSave,
	enableSaveData,
	enableAddRow,
	enableRemoveRows,
	isEditable,
	disabled,
	disabledSaveButton,
	wordWrap,
	setWordWrap,
	setGlobalFilter,
	onPasteRowsToTable,
	allowImport = true,
	canAddNewRow = undefined,
}) => {
	const { t } = useTranslation()
	const [isLoadingAddRow, setIsLoadingAddRow] = useState(false)
	const isSmallScreen = useIsSmallScreen()
	const isVisibleSaveButton = isEditable && handleSaveData && enableSaveData
	const allowDividerSelection = useAppStore
		.getState()
		.getElementsByName(table.options.meta.widgetName)?.isDecimalInputMode

	if (!isEditable) return null

	const onAddRow = async () => {
		setIsLoadingAddRow(true)
		await handleAddRow(table, columns)
		setIsLoadingAddRow(false)
	}

	return (
		<Box width={'100%'} display={'flex'} flexDirection={'column'} gap={1}>
			<BackDropLoader open={isLoadingAddRow} />

			<Typography
				display={title ? 'flex' : 'none'}
				textAlign={'center'}
				gutterBottom
				px={1}
				sx={theme => ({ ...theme.typography.widgetTitle })}
			>
				{t(title)}
			</Typography>

			<Box
				display={'flex'}
				gap={0.5}
				alignItems={'center'}
				justifyContent={'space-between'}
				flexWrap={'wrap'}
			>
				<Box display={'flex'} gap={1}>
					<StyledButton
						label={'save'}
						icon={'SaveIcon'}
						onClick={handleSaveData}
						disabled={disabled || disabledSaveButton}
						sx={{ display: isVisibleSaveButton ? undefined : 'none', mx: 0.5 }}
					/>

					<StyledButton
						label={'messages.add'}
						icon={'AddIcon'}
						isActiveStyle
						onClick={onAddRow}
						disabled={
							disabled || (canAddNewRow ? !canAddNewRow?.({ table }) : false)
						}
						sx={{
							display:
								isEditable && handleAddRow && enableAddRow ? undefined : 'none',
						}}
					/>

					{allowImport && (
						<ClipboardPasteButtonModal
							columns={columns}
							disabled={disabled}
							onPasteRows={onPasteRowsToTable}
							sx={{
								display:
									isEditable && handleAddRow && enableAddRow
										? undefined
										: 'none',
							}}
						/>
					)}

					<DeleteButtonWithDialog
						disabled={
							table.getSelectedRowModel().flatRows.length === 0 || disabled
						}
						sx={{
							display:
								isEditable && handleRemoveRows && enableRemoveRows
									? undefined
									: 'none',
						}}
						handleBeforeRemove={() => handleBeforeRemove(table)}
						action={filteredSelectedRows =>
							handleRemoveRows(table, filteredSelectedRows)
						}
					/>
				</Box>

				<Box px={0.5} />

				<InternalActions
					table={table}
					wordWrap={wordWrap}
					setWordWrap={setWordWrap}
					setGlobalFilter={setGlobalFilter}
				/>

				<IconButton
					icon={'CloseIcon'}
					onClick={onDeactivateEditable}
					color={'primary'}
					sx={{ display: isFullscreen ? 'flex' : 'none' }}
				/>

				{allowDividerSelection && (
					<DividerSelector widgetName={table.options.meta.widgetName} />
				)}
			</Box>
		</Box>
	)
}
