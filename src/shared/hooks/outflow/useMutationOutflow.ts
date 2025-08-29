import {
	DeleteOutflowMutationHookResult,
	useCreateOutflowMutation,
	useDeleteOutflowMutation,
	useUpdateOutflowMutation,
} from '@/generated/graphql'
import { showToastPromise } from '@/shared/ui/toast'

export function useMutationOutflow() {
	const [createOutflowMutation, createOutflowResult] =
		useCreateOutflowMutation()
	const [updateOutflowMutation, updateOutflowResult] =
		useUpdateOutflowMutation()
	const [deleteOutflowMutation, deleteOutflowResult] =
		useDeleteOutflowMutation()

	const handleDeleteOutflow: DeleteOutflowMutationHookResult[0] = async (
		...args
	) => {
		return showToastPromise(deleteOutflowMutation(...args), {
			pending: 'Удаление расхода...',
			success: 'Расход успешно удален!',
			error: 'Ошибка при удалении расхода',
		})
	}

	return {
		create: createOutflowMutation,
		update: updateOutflowMutation,
		delete: handleDeleteOutflow,
		createOutflowResult,
		updateOutflowResult,
		deleteOutflowResult,
		isLoading:
			createOutflowResult.loading ||
			updateOutflowResult.loading ||
			deleteOutflowResult.loading,
	}
}
