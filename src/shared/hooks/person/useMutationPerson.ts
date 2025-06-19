import {
	DeletePersonMutationHookResult,
	useCreatePersonMutation,
	useDeletePersonMutation,
	useGetPersonByIdQuery,
} from '@/generated/graphql'
import { showToastError, showToastPromise } from '@/shared/ui/toast'
import { useEffect } from 'react'

export function useMutationPerson(id?: number) {
	const personQuery = useGetPersonByIdQuery({
		variables: { id: id as number },
		skip: id == undefined,
	})

	const [createPersonMutation, createPersonResult] = useCreatePersonMutation()
	const [updatePersonMutation, updatePersonResult] = useCreatePersonMutation()
	const [deletePersonMutation, deletePersonResult] = useDeletePersonMutation()

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
		delete: handleDeletePerson,
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
