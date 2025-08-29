import {
	DeletePersonMutationHookResult,
	GetAllPersonsDocument,
	GetPersonsWithStatisticsDocument,
	useCreatePersonMutation,
	useDeletePersonMutation,
	useGetPersonByIdQuery,
	useUpdatePersonMutation,
} from '@/generated/graphql'
import { showToastError, showToastPromise } from '@/shared/ui/toast'
import { useEffect } from 'react'

const REFETCH_QUERIES = [
	{ query: GetAllPersonsDocument },
	{ query: GetPersonsWithStatisticsDocument },
]

export function useMutationPerson(id?: number) {
	const personQuery = useGetPersonByIdQuery({
		variables: { id: id as number },
		skip: id == undefined,
	})

	const [createPersonMutation, createPersonResult] = useCreatePersonMutation({
		refetchQueries: REFETCH_QUERIES,
	})
	const [updatePersonMutation, updatePersonResult] = useUpdatePersonMutation({
		refetchQueries: REFETCH_QUERIES,
	})
	const [deletePersonMutation, deletePersonResult] = useDeletePersonMutation({
		refetchQueries: REFETCH_QUERIES,
	})

	useEffect(() => {
		if (personQuery.error) {
			showToastError(
				'Ошибка при загрузке данных пользователя',
				personQuery.error
			)
		}
	}, [personQuery.error])

	const handleDeletePerson: DeletePersonMutationHookResult[0] = async (
		...args
	) => {
		return showToastPromise(deletePersonMutation(...args), {
			pending: 'Удаление пользователя...',
			success: 'Пользователь успешно удален!',
			error: 'Ошибка при удалении пользователя.',
		})
	}

	return {
		person: personQuery,
		create: createPersonMutation,
		update: updatePersonMutation,
		deleteItem: handleDeletePerson,
		createPersonResult,
		updatePersonResult,
		deletePersonResult,
		isLoading:
			personQuery.loading ||
			createPersonResult.loading ||
			updatePersonResult.loading ||
			deletePersonResult.loading,
	}
}
