import { useToolbarHeight } from '@/shared'
import { Grow } from '@mui/material'
import Dialog, { DialogProps } from '@mui/material/Dialog'

export const FullscreenModal = ({ open, children }: DialogProps) => {
	const toolbarHeight = useToolbarHeight()

	return (
		<>
			<Dialog
				open={open}
				fullScreen
				hideBackdrop
				slots={{ transition: Grow }}
				sx={{
					zIndex: 1200,
					pt: `${toolbarHeight}px`,
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
				}}
			>
				{open ? children : null}
			</Dialog>

			{open ? null : children}
		</>
	)
}
