import { callSnackbarError } from '@/helper'
import { IDeleteButtonWithDialog } from '@/interfaces'
import { DialogYesNoCancel } from '@components/modal/DialogYesNoCancel'
import { cloneElement, ReactElement, useState } from 'react'
import { StyledButton } from '../StyledButton'

export const DeleteButtonWithDialog = ({
	action,
	children,
	disabled = false,
	handleBeforeRemove = undefined,
	sx = {},
	title = 'messages.doYouReallyWantToDeleteTheseRecords',
	...props
}: IDeleteButtonWithDialog) => {
	const [openDialog, setOpenDialog] = useState<boolean>(false)
	const [additionalMessage, setAdditionalMessage] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const onCloseDialog = async (request: string, data) => {
		try {
			switch (request) {
				case 'yes':
					setIsLoading(true)

					return await action(data)
				case 'no':
					return
				default:
					return
			}
		} catch (error) {
			callSnackbarError(error)
		} finally {
			setOpenDialog(false)
			setIsLoading(false)
		}
	}

	const onOpenDialog = async () => {
		setOpenDialog(true)

		const messages = await handleBeforeRemove?.()
		setAdditionalMessage(messages || '')
	}

	const childrenComponent = (children: ReactElement) => cloneElement(children, { onClick: onOpenDialog })

	return (
		<>
			{children ? (
				childrenComponent(children)
			) : (
				<StyledButton
					label={'messages.remove'}
					icon={'DeleteIcon'}
					color={'error'}
					onClick={onOpenDialog}
					disabled={disabled}
					sx={sx}
					{...props}
				/>
			)}

			<DialogYesNoCancel
				title={title}
				open={openDialog}
				onClose={onCloseDialog}
				disableCancel
				isLoading={isLoading}
			>
				{additionalMessage}
			</DialogYesNoCancel>
		</>
	)
}
