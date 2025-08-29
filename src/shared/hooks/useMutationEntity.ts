import { useMutation, useQuery, DocumentNode } from '@apollo/client'
import { showToastError, showToastPromise } from '@/shared/ui/toast'
import { useEffect } from 'react'

interface MutationEntityOptions {
	getByIdQuery: DocumentNode
	createQuery: DocumentNode
	updateQuery: DocumentNode
	deleteQuery: DocumentNode
	refetchQuery: DocumentNode
	entityNameRu: string // e.g. 'вида работ'
}

export function useMutationEntity(options: MutationEntityOptions, id?: number) {
	const { getByIdQuery, createQuery, updateQuery, deleteQuery, refetchQuery, entityNameRu } = options

	const entityQuery = useQuery(getByIdQuery, {
		variables: { id: id as number },
		skip: id == undefined,
	})

	const [createEntityMutation, createEntityResult] = useMutation(createQuery, {
		refetchQueries: [{ query: refetchQuery }],
	})

	const [updateEntityMutation, updateEntityResult] = useMutation(updateQuery, {
		refetchQueries: [{ query: refetchQuery }],
	})

	const [deleteEntityMutation, deleteEntityResult] = useMutation(deleteQuery, {
		refetchQueries: [{ query: refetchQuery }],
	})

	useEffect(() => {
		if (entityQuery.error) {
			showToastError(`Ошибка при загрузке данных ${entityNameRu}`, entityQuery.error)
		}
	}, [entityQuery.error])

	const handleDeleteEntity = async (...args: any[]) => {
		return showToastPromise(deleteEntityMutation(...args), {
			pending: 'Удаление записи...',
			success: 'Запись успешно удалена.',
			error: 'Ошибка при удалении записи.',
		})
	}

	return {
		entityQuery,
		create: createEntityMutation,
		update: updateEntityMutation,
		deleteItem: handleDeleteEntity,
		createResult: createEntityResult,
		updateResult: updateEntityResult,
		deleteResult: deleteEntityResult,
		isLoading:
			createEntityResult.loading ||
			updateEntityResult.loading ||
			deleteEntityResult.loading,
	}
}
