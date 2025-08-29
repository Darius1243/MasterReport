import { DocumentType } from '@/generated/graphql'
import { useMutationDocumentType } from '@/shared/hooks/documentType'
import { STRING_FORM } from '@/shared/model/constants'
import { IFields } from '@/shared/model/types/TypeInputField'
import { EntityDetails } from '@/shared/ui'

const getNewDocumentType = (): DocumentType => ({
	__typename: 'DocumentType',
	id: 0,
	name: '',
})

export const DocumentTypeDetails = (props: {
	id?: number
	item?: DocumentType
	onCloseModal?: () => void
}) => {
	const {
		documentType: { data, error, loading },
		create,
		update,
		deleteItem,
		isLoading,
	} = useMutationDocumentType(props.item ? undefined : props.id)

	return (
		<EntityDetails<DocumentType>
			{...props}
			data={props.item || data?.documentType}
			getNewItem={getNewDocumentType}
			error={error}
			create={create}
			update={update}
			deleteItem={deleteItem}
			isLoading={isLoading || loading}
			fields={fields}
		/>
	)
}

const fields: IFields = {
	name: {
		name: 'name',
		label: 'Вид документа',
		type: STRING_FORM,
		required: true,
	},
}