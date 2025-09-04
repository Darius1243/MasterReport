import { useMutationOutflow } from '@/shared/hooks/outflow'
import { isEmpty } from '@/shared/libs'
import { DocViewer } from '@/shared/ui/docViewer'
import { MasterForm } from '@/shared/ui/mui/MasterForm/MasterForm'
import { useLoaderData } from 'react-router'

export const Outflow = () => {
	const { result: widget } = useLoaderData()
	const { create, update, isLoading } = useMutationOutflow()

	if (isEmpty(widget)) return null

	return (
		<>
			<MasterForm
				elements={widget}
				crud={{ create, update }}
				isLoading={isLoading}
			/>

			<DocViewer documentType={'check'} />
		</>
	)
}
