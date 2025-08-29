import {
	DeleteFacilityMutationHookResult,
	GetAllFacilitiesDocument,
	useCreateFacilityMutation,
	useDeleteFacilityMutation,
	useGetFacilityByIdQuery,
	useUpdateFacilityMutation,
} from '@/generated/graphql'
import { showToastError, showToastPromise } from '@/shared/ui/toast'
import { useEffect } from 'react'

const REFETCH_QUERIES = [{ query: GetAllFacilitiesDocument }]

export function useMutationFacility(id?: number) {
	const facilityQuery = useGetFacilityByIdQuery({
		variables: { id: id as number },
		skip: id == undefined,
	})

	const [createFacilityMutation, createFacilityResult] =
		useCreateFacilityMutation({
			refetchQueries: REFETCH_QUERIES,
		})
	const [updateFacilityMutation, updateFacilityResult] =
		useUpdateFacilityMutation({
			refetchQueries: REFETCH_QUERIES,
		})
	const [deleteFacilityMutation, deleteFacilityResult] =
		useDeleteFacilityMutation({
			refetchQueries: REFETCH_QUERIES,
		})

	useEffect(() => {
		if (facilityQuery.error) {
			showToastError('Ошибка при загрузке данных объекта', facilityQuery.error)
		}
	}, [facilityQuery.error])

	const handleDeleteFacility: DeleteFacilityMutationHookResult[0] = async (
		...args
	) => {
		return showToastPromise(deleteFacilityMutation(...args), {
			pending: 'Удаление объекта...',
			success: 'Объект успешно удален!',
			error: 'Ошибка при удалении объекта.',
		})
	}

	return {
		facility: facilityQuery,
		create: createFacilityMutation,
		update: updateFacilityMutation,
		deleteItem: handleDeleteFacility,
		createFacilityResult,
		updateFacilityResult,
		deleteFacilityResult,
		isLoading:
			createFacilityResult.loading ||
			updateFacilityResult.loading ||
			deleteFacilityResult.loading,
	}
}
