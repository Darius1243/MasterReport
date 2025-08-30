import { useMutationOutflow } from '@/shared/hooks/outflow'
import { isEmpty } from '@/shared/libs'
import { MasterForm } from '@/shared/ui/form'
import { useLoaderData, useRevalidator } from 'react-router'

export const Outflow = () => {
	const revalidator = useRevalidator()
	const { result: widget } = useLoaderData()
	const { create, update, isLoading } = useMutationOutflow(
		revalidator.revalidate
	)

	if (isEmpty(widget)) return null

	return (
		<MasterForm
			elements={widget}
			crud={{ create, update }}
			error={undefined}
			isLoading={isLoading}
		/>
	)
}
