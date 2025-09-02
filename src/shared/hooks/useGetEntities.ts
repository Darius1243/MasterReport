import { showToastError } from '@/shared/ui/toast'
import { DocumentNode, useQuery } from '@apollo/client'
import { useEffect } from 'react'

export function useGetEntities<T>(query: DocumentNode, entityName: keyof T) {
	const { data, error, ...rest } = useQuery<T>(query)

	useEffect(() => {
		if (error) showToastError(`Ошибка при загрузке списка`, error)
	}, [error])

	const entities = data ? (data[entityName] as unknown as any[]) : []

	return { ...rest, data: entities, error }
}
