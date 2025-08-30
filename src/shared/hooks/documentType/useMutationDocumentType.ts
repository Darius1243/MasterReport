import {
	CREATE_DOCUMENT_TYPE,
	DELETE_DOCUMENT_TYPE,
	GET_ALL_DOCUMENT_TYPES,
	GET_DOCUMENT_TYPE_BY_ID,
	UPDATE_DOCUMENT_TYPE,
} from '@/entities/user/api/documentTypeQueries'
import { useMutationEntity } from '../useMutationEntity'

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
			refetchQueries: [GET_ALL_DOCUMENT_TYPES],
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
