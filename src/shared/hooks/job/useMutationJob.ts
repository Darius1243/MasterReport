import {
	DeleteJobMutationHookResult,
	GetAllJobsDocument,
	useCreateJobMutation,
	useDeleteJobMutation,
	useGetJobByIdQuery,
	useUpdateJobMutation,
} from '@/generated/graphql'
import { showToastError, showToastPromise } from '@/shared/ui/toast'
import { useEffect } from 'react'

const REFETCH_QUERIES = [{ query: GetAllJobsDocument }]

export function useMutationJob(id?: number) {
	const jobQuery = useGetJobByIdQuery({
		variables: { id: id as number },
		skip: id == undefined,
	})

	const [createJobMutation, createJobResult] = useCreateJobMutation({
		refetchQueries: REFETCH_QUERIES,
	})
	const [updateJobMutation, updateJobResult] = useUpdateJobMutation({
		refetchQueries: REFETCH_QUERIES,
	})
	const [deleteJobMutation, deleteJobResult] = useDeleteJobMutation({
		refetchQueries: REFETCH_QUERIES,
	})

	useEffect(() => {
		if (jobQuery.error) {
			showToastError('Ошибка при загрузке данных вида работ', jobQuery.error)
		}
	}, [jobQuery.error])

	const handleDeleteJob: DeleteJobMutationHookResult[0] = async (...args) => {
		return showToastPromise(deleteJobMutation(...args), {
			pending: 'Удаление вида работ...',
			success: 'Вид работ успешно удален!',
			error: 'Ошибка при удалении вида работы.',
		})
	}

	return {
		job: jobQuery,
		create: createJobMutation,
		update: updateJobMutation,
		deleteItem: handleDeleteJob,
		createJobResult,
		updateJobResult,
		deleteJobResult,
		isLoading:
			createJobResult.loading ||
			updateJobResult.loading ||
			deleteJobResult.loading,
	}
}
