import { useMutationInflow } from '@/shared/hooks/inflow'
import { isEmpty } from '@/shared/libs'
import { MasterForm } from '@/shared/ui/mui/MasterForm/MasterForm'
import { useLoaderData } from 'react-router'

export const Inflow = () => {
	const { result: widget } = useLoaderData()
	const { create, update, isLoading } = useMutationInflow()

	if (isEmpty(widget)) return null

	return (
		<MasterForm
			elements={widget}
			crud={{ create, update }}
			isLoading={isLoading}
		/>
	)
}
