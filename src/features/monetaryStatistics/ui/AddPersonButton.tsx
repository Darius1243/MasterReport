import { MuiModal } from '@/shared/ui/mui'
import { Button } from '@/shared/ui/mui/Button'
import { useState } from 'react'
import { AddEditPersonContent } from './AddEditPersonContent'

export const AddPersonButton = ({ refetch }: { refetch: () => void }) => {
	const [open, setOpen] = useState(false)

	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(false)

	return (
		<>
			<Button label={'Добавить лицо'} icon={'AddIcon'} onClick={onOpen} />

			<MuiModal title={'Добавить новое лицо'} open={open} onClose={onClose}>
				<AddEditPersonContent refetch={refetch} onCloseModal={onClose} />
			</MuiModal>
		</>
	)
}
