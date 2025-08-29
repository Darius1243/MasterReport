import { useGetAllFacilitiesQuery } from '@/generated/graphql'
import { showToastError } from '@/shared/ui/toast'
import { useEffect } from 'react'

export function useGetFacilities() {
	const { data, error, ...rest } = useGetAllFacilitiesQuery()

	useEffect(() => {
		if (error) showToastError('Ошибка при загрузке списка объектов', error)
	}, [error])

	return { ...rest, data: data?.facilities ?? [], error }
}
