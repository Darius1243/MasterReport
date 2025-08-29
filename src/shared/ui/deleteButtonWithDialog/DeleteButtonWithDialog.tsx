import { showToastError } from '@/shared/libs/toast/toast'
import { cloneElement, ReactElement, useState } from 'react'
import { DialogYesNoCancel } from '../dialogYesNoCancel'
import { Button } from '../mui/Button'

interface IDeleteButtonWithDialog {
	action: (data: any) => Promise<any>
	disabled?: boolean
	handleBeforeRemove?: () => Promise<string>
	sx?: any
	title?: string
	children?: ReactElement
}

export const DeleteButtonWithDialog = ({
	action,
	children,
	disabled = false,
	handleBeforeRemove = undefined,
	sx = {},
	title = 'Вы действительно хотите данную запись?',
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
			showToastError(error)
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

	const childrenComponent = (children: ReactElement) =>
		cloneElement(children, { onClick: onOpenDialog })

	return (
		<>
			{children ? (
				childrenComponent(children)
			) : (
				<Button
					label={'Удалить'}
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
