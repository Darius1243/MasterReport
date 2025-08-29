import { useMutationEntity } from '../useMutationEntity'
import {
	GET_DOCUMENT_TYPE_BY_ID,
	CREATE_DOCUMENT_TYPE,
	UPDATE_DOCUMENT_TYPE,
	DELETE_DOCUMENT_TYPE,
	GET_ALL_DOCUMENT_TYPES,
} from '@/entities/user/api/documentTypeQueries'

export function useMutationDocumentType(id?: number) {
	const {
		entityQuery,
		create,
		update,
		deleteItem,
		createResult,
		updateResult,
		deleteResult,
		isLoading,
	} = useMutationEntity(
		{
			getByIdQuery: GET_DOCUMENT_TYPE_BY_ID,
			createQuery: CREATE_DOCUMENT_TYPE,
			updateQuery: UPDATE_DOCUMENT_TYPE,
			deleteQuery: DELETE_DOCUMENT_TYPE,
			refetchQuery: GET_ALL_DOCUMENT_TYPES,
			entityNameRu: 'вида документов',
		},
		id
	)

	return {
		documentType: entityQuery,
		create,
		update,
		deleteItem,
		createDocumentTypeResult: createResult,
		updateDocumentTypeResult: updateResult,
		deleteDocumentTypeResult: deleteResult,
		isLoading,
	}
}
