import { useGetPersonsWithStatisticsQuery } from '@/generated/graphql'
import { showToastError } from '@/shared/ui/toast'
import { useEffect } from 'react'

export function useGetPersons() {
	const { data, error, ...rest } = useGetPersonsWithStatisticsQuery()

	useEffect(() => {
		if (error) showToastError('Ошибка при загрузке списка пользователей', error)
	}, [error])

	return { ...rest, data: data?.personsWithStatistics ?? [], error }
}
