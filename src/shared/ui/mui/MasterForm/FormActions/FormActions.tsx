import { Portal } from '@mui/material'
import { ClipboardPasteButton } from './ClipboardImportButton'
import { PopoverForm } from './PopoverForm'

export const FormActions = ({ setNewElements, newElements }) => {
	if (!newElements) return null

	const container = [
		`.widgetTitle-${newElements?.widgetName}`,
		//	`.widgetTitle-${newElements?.widgetHolder}`,
		'.settings-modal',
	]
		.filter(Boolean)
		.map(selector => document.querySelector(selector))
		.find(element => element)

	if (!container) return null

	//  правильные fields с учётом labelPrefix
	const fields =
		newElements.blocks.flatMap(({ labelPrefix, fields }) =>
			fields.map(field => ({
				...field,
				...(labelPrefix && !field.label && { label: `${labelPrefix}.${field.name}` }),
			})),
		) ?? []

	return (
		<Portal container={container}>
			<ClipboardPasteButton formFields={fields} />
			<PopoverForm set={setNewElements} widgetName={newElements?.widgetName} blocks={newElements?.blocks} />
		</Portal>
	)
}
