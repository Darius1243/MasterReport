import { DocumentType } from '@/generated/graphql'
import { useGetDocumentTypes } from '@/shared/hooks/documentType/useGetDocumentTypes'
import { ListWithDetails } from '@/shared/ui/listWithDetails'
import { DocumentTypeDetails } from './DocumentTypeDetails'

export const DocumentTypesList = () => {
	const { data, loading, error } = useGetDocumentTypes()

	return (
		<ListWithDetails<DocumentType>
			data={data}
			loading={loading}
			error={error}
			addButtonLabel={'Добавить вид документа'}
		>
			{DocumentTypeDetails}
		</ListWithDetails>
	)
}
