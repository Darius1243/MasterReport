import { useMutationOutflow } from '@/shared/hooks/outflow'
import { isEmpty } from '@/shared/libs'
import { MasterForm } from '@/shared/ui/form'
import { useLoaderData } from 'react-router'

export const Outflow = () => {
	const { result: widget } = useLoaderData()
	const { create, update, isLoading } = useMutationOutflow()

	if (isEmpty(widget)) return null

	return (
		<MasterForm
			elements={widget}
			crud={{ create, update }}
			error={undefined}
			refetch={() => {}}
			isLoading={isLoading}
		/>
	)
}
