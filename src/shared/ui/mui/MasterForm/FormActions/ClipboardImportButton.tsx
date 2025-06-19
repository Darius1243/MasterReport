import { useModal } from '@contexts/index'
import { useFormContext } from 'react-hook-form'
import { IconButton } from '../../Button'
import { ImportFromBuffer } from '../../ImportFromBuffer'

export const ClipboardPasteButton = ({ formFields }) => {
	const { openModal, closeModal } = useModal()

	const formContext = useFormContext()
	if (!formContext) return null

	const { setValue } = formContext

	const handleAddFormData = (values: { formItem: { name: any }; input: any }[]) => {
		values?.map(value => setValue?.(value.formItem?.name, value.input, { shouldDirty: !!value.formItem }))
		closeModal()
	}

	// const handleAddFormDataToTable = values => {
	// 	// todo:  сделать возможным добавление из подстроки, как и скрытие
	// }

	const handleImportToForm = () => {
		openModal({
			component: (
				<ImportFromBuffer columns={formFields} pasteIn='form' onPasteRows={rows => handleAddFormData(rows)} />
			),
			title: 'messages.pasteFromClipboard',
		})
	}

	return <IconButton icon='ClipboardPasteIcon' sx={{ color: 'gray' }} onClick={handleImportToForm} />
}
