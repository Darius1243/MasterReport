import { useGetAllJobsQuery } from '@/generated/graphql'
import { showToastError } from '@/shared/ui/toast'
import { useEffect } from 'react'

export function useGetJobs() {
	const { data, error, ...rest } = useGetAllJobsQuery()

	useEffect(() => {
		if (error) showToastError('Ошибка при загрузке списка видов работ', error)
	}, [error])

	return { ...rest, data: data?.jobs ?? [], error }
}
