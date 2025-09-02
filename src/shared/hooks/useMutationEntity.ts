import { showToastError, showToastPromise } from '@/shared/ui/toast'
import { DocumentNode, useMutation, useQuery } from '@apollo/client'
import { useEffect } from 'react'

interface MutationEntityOptions {
	getByIdQuery: DocumentNode
	createQuery: DocumentNode
	updateQuery: DocumentNode
	deleteQuery: DocumentNode
	refetchQueries: DocumentNode[]
	entityNameRu: string
}

export function useMutationEntity(options: MutationEntityOptions, id?: number) {
	const {
		getByIdQuery,
		createQuery,
		updateQuery,
		deleteQuery,
		refetchQueries,
		entityNameRu,
	} = options

	const entityQuery = useQuery(getByIdQuery, {
		variables: { id: id as number },
		skip: id == undefined,
	})

	const [createEntityMutation, createEntityResult] = useMutation(createQuery, {
		refetchQueries: refetchQueries.map(query => ({ query })),
	})

	const [updateEntityMutation, updateEntityResult] = useMutation(updateQuery, {
		refetchQueries: refetchQueries.map(query => ({ query })),
	})

	const [deleteEntityMutation, deleteEntityResult] = useMutation(deleteQuery, {
		refetchQueries: refetchQueries.map(query => ({ query })),
	})

	useEffect(() => {
		if (entityQuery.error) {
			showToastError(
				`Ошибка при загрузке данных ${entityNameRu}`,
				entityQuery.error
			)
		}
	}, [entityQuery.error, entityNameRu])

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
