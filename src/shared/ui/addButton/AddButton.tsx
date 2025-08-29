import { MuiModal } from '@/shared/ui/mui'
import { Button } from '@/shared/ui/mui/Button'
import Box from '@mui/material/Box'
import { useState } from 'react'

interface IAddButtonProps {
	label: string
	children: React.ComponentType<{ item?: any; onCloseModal?: () => void }>
	isDisabled?: boolean
}

export const AddButton = ({
	label,
	children: Component,
	isDisabled = false,
}: IAddButtonProps) => {
	const [open, setOpen] = useState(false)

	const onClose = () => setOpen(false)

	return (
		<Box>
			<Button
				label={label}
				icon={'AddIcon'}
				onClick={() => setOpen(true)}
				isDisabled={isDisabled}
			/>

			<MuiModal title={label} open={open} onClose={onClose}>
				<Component onCloseModal={onClose} />
			</MuiModal>
		</Box>
	)
}
