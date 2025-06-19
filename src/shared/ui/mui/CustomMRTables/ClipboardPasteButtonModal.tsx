import { StyledButton } from '@components/customComponents/Button'
import { ImportFromBuffer } from '@components/customComponents/ImportFromBuffer'
import { Modal } from '@components/modal/Modal'
import { useState } from 'react'

export const ClipboardPasteButtonModal = ({ columns, onPasteRows, ...props }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const onOpenModal = () => setIsModalOpen(true)

	const onPasteRowsAndCloseModal = rows => {
		setIsModalOpen(false)
		onPasteRows(rows)
	}

	return (
		<>
			<StyledButton
				label={'messages.pasteFromClipboard'}
				icon={'ClipboardPasteIcon'}
				onClick={onOpenModal}
				{...props}
			/>

			<Modal
				isModalOpen={isModalOpen}
				onCloseModal={() => setIsModalOpen(false)}
				title={'messages.pasteFromClipboard'}
				aria-hidden={!isModalOpen}
			>
				<ImportFromBuffer columns={columns} onPasteRows={onPasteRowsAndCloseModal} />
			</Modal>
		</>
	)
}
