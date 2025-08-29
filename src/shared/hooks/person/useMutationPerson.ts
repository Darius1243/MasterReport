import { useMutationEntity } from '../useMutationEntity'
import {
	GET_PERSON_BY_ID,
	CREATE_PERSON,
	UPDATE_PERSON,
	DELETE_PERSON,
	GET_ALL_PERSONS,
} from '@/entities/user/api/personQueries'

export function useMutationPerson(id?: number) {
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
			getByIdQuery: GET_PERSON_BY_ID,
			createQuery: CREATE_PERSON,
			updateQuery: UPDATE_PERSON,
			deleteQuery: DELETE_PERSON,
			refetchQuery: GET_ALL_PERSONS,
			entityNameRu: 'лица',
		},
		id
	)

	return {
		person: entityQuery,
		create,
		update,
		deleteItem,
		createPersonResult: createResult,
		updatePersonResult: updateResult,
		deletePersonResult: deleteResult,
		isLoading,
	}
}