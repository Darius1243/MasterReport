import { DialogYesNoCancel } from '@components/modal/DialogYesNoCancel'
import React from 'react'
import { IconButton } from '../IconButton'

export const CloseButtonWithDialog = ({ action, sx = {}, children = undefined, ...props }) => {
	const [openDialog, setOpenDialog] = React.useState(false)

	const onCloseDialog = request => {
		setOpenDialog(false)

		switch (request) {
			case 'yes':
				action()
				break
			case 'no':
				break
			default:
				break
		}
	}

	const onOpenDialog = async () => setOpenDialog(true)
	const childrenComponent = children => React.cloneElement(children, { onClick: onOpenDialog })

	return (
		<>
			{children ? (
				childrenComponent(children)
			) : (
				<IconButton icon={'CloseIcon'} onClick={onOpenDialog} sx={sx} {...props} />
			)}

			<DialogYesNoCancel
				title={'messages.doYouReallyWantCloseDialogueBox'}
				open={openDialog}
				onClose={onCloseDialog}
				disableCancel
			/>
		</>
	)
}
