import { useMutationEntity } from '../useMutationEntity'
import {
	GET_JOB_BY_ID,
	CREATE_JOB,
	UPDATE_JOB,
	DELETE_JOB,
	GET_ALL_JOBS,
} from '@/entities/user/api/jobQueries'

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
			refetchQuery: GET_ALL_JOBS,
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