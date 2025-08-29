import { useGetOutflowsByPersonIdLazyQuery } from '@/generated/graphql'
import { showToastError } from '@/shared/ui/toast'
import { useEffect } from 'react'

export const useGetOutflowsByPersonId = (personId: number) => {
	const [getOutflow, { data, error, loading }] =
		useGetOutflowsByPersonIdLazyQuery({ variables: { personId } })

	useEffect(() => {
		if (error) showToastError('Ошибка при загрузке списка расходов', error)
	}, [error])

	return { getOutflow, data: data?.outflowsByPersonId ?? [], loading, error }
}
