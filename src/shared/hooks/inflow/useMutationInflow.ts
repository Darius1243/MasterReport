import {
	DeleteInflowMutationHookResult,
	GetPersonsWithStatisticsDocument,
	useCreateInflowMutation,
	useDeleteInflowMutation,
	useUpdateInflowMutation,
} from '@/generated/graphql'
import { showToastPromise } from '@/shared/ui/toast'

export function useMutationInflow() {
	const [createInflowMutation, createInflowResult] = useCreateInflowMutation({
		refetchQueries: [{ query: GetPersonsWithStatisticsDocument }],
	})
	const [updateInflowMutation, updateInflowResult] = useUpdateInflowMutation({
		refetchQueries: [{ query: GetPersonsWithStatisticsDocument }],
	})
	const [deleteInflowMutation, deleteInflowResult] = useDeleteInflowMutation({
		refetchQueries: [{ query: GetPersonsWithStatisticsDocument }],
	})

	const handleDeleteInflow: DeleteInflowMutationHookResult[0] = async (
		...args
	) => {
		return showToastPromise(deleteInflowMutation(...args), {
			pending: 'Удаление прихода...',
			success: 'Приход успешно удален!',
			error: 'Ошибка при удалении прихода.',
		})
	}

	return {
		create: createInflowMutation,
		update: updateInflowMutation,
		delete: handleDeleteInflow,
		createInflowResult,
		updateInflowResult,
		deleteInflowResult,
		isLoading:
			createInflowResult.loading ||
			updateInflowResult.loading ||
			deleteInflowResult.loading,
	}
}
