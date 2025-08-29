import { useGetEntities } from '../useGetEntities'
import { GET_ALL_DOCUMENT_TYPES } from '@/entities/user/api/documentTypeQueries'
import { GetAllDocumentTypesQuery } from '@/generated/graphql'

export function useGetDocumentTypes() {
	return useGetEntities<GetAllDocumentTypesQuery>(
		GET_ALL_DOCUMENT_TYPES,
		'documentTypes'
	)
}
