import { useGetInflowsByPersonIdLazyQuery } from '@/generated/graphql'
import { showToastError } from '@/shared/ui/toast'
import { useEffect } from 'react'

export const useGetInflowsByPersonId = (personId: number) => {
	const [getInflows, { data, error, loading }] =
		useGetInflowsByPersonIdLazyQuery({ variables: { personId } })

	useEffect(() => {
		if (error) showToastError('Ошибка при загрузке списка приходов', error)
	}, [error])

	return { getInflows, data: data?.inflowsByPersonId ?? [], loading, error }
}
