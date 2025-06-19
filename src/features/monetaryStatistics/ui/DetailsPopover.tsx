import { BORDER_RADIUS } from '@/shared/model/constants'
import Popover, { PopoverProps } from '@mui/material/Popover'

interface IDetailsPopoverProps
	extends Omit<PopoverProps, 'id' | 'open' | 'anchorEl' | 'onClose'> {
	open: boolean
	anchorEl: HTMLButtonElement | null
	onClose: () => void
	children: React.ReactNode
}

export const DetailsPopover = ({
	open,
	anchorEl,
	onClose,
	children,
	...props
}: IDetailsPopoverProps) => {
	return (
		<Popover
			id={open ? 'simple-popover' : undefined}
			aria-hidden={!open}
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			slotProps={{
				paper: { sx: { p: 2, mt: 1, borderRadius: BORDER_RADIUS } },
			}}
			{...props}
		>
			{children}
		</Popover>
	)
}
