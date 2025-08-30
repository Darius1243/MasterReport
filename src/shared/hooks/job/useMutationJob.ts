import {
	CREATE_JOB,
	DELETE_JOB,
	GET_ALL_JOBS,
	GET_JOB_BY_ID,
	UPDATE_JOB,
} from '@/entities/user/api/jobQueries'
import { useMutationEntity } from '../useMutationEntity'

export function useMutationJob(id?: number) {
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
			getByIdQuery: GET_JOB_BY_ID,
			createQuery: CREATE_JOB,
			updateQuery: UPDATE_JOB,
			deleteQuery: DELETE_JOB,
			refetchQueries: [GET_ALL_JOBS],
			entityNameRu: 'вида работ',
		},
		id
	)

	return {
		job: entityQuery,
		create,
		update,
		deleteItem,
		createJobResult: createResult,
		updateJobResult: updateResult,
		deleteJobResult: deleteResult,
		isLoading,
	}
}
