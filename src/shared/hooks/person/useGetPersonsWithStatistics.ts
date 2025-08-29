import { useGetPersonsWithStatisticsQuery } from '@/generated/graphql'
import { showToastError } from '@/shared/ui/toast'
import { useEffect } from 'react'

export function useGetPersonsWithStatistics() {
	const { data, error, ...rest } = useGetPersonsWithStatisticsQuery()

	useEffect(() => {
		if (error) showToastError('Ошибка при загрузке статистики', error)
	}, [error])

	return { ...rest, data: data?.personsWithStatistics ?? [], error }
}
