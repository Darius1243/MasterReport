import {
	CREATE_PERSON,
	DELETE_PERSON,
	GET_ALL_PERSONS,
	GET_PERSON_BY_ID,
	GET_PERSONS_WITH_STATISTICS,
	UPDATE_PERSON,
} from '@/entities/user/api/personQueries'
import { useMutationEntity } from '../useMutationEntity'

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
			refetchQueries: [GET_ALL_PERSONS, GET_PERSONS_WITH_STATISTICS],
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
