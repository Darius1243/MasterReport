import { isEmpty } from '@/shared/libs'
import { IRenderInputFields } from '@/shared/model/types'
import Box from '@mui/material/Box'
import { RenderInputFields } from './RenderInputFields'

export const ContainerRenderInputFields = ({
	fields,
	isLoading,
}: IRenderInputFields) => {
	if (isEmpty(fields)) return

	const requiredFields = Object.values(fields).filter(field => field.required)
	const notRequiredFields = Object.values(fields).filter(
		field => !field.required
	)

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
			<Box flex={1}>
				<RenderInputFields fields={requiredFields} isLoading={isLoading} />
			</Box>

			<RenderInputFields fields={notRequiredFields} isLoading={isLoading} />
		</Box>
	)
}
