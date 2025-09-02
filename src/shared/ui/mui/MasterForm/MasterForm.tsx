import { useGetDefaultValues, useYupValidationResolver } from '@/shared/hooks'
import { useAutoFocus } from '@/shared/hooks/useAutoFocus'
import { IMasterForm } from '@/shared/model/types/IMasterForm'
import { useForm } from 'react-hook-form'
import { ErrorBoundary } from '../../boundary'
import { ContainerRenderInputFields } from './ContainerRenderInputFields'
import { CustomForm } from './CustomForm'
import { onSubmit } from './lib'

export const MasterForm = ({
	id,
	data,
	error,
	refetch,
	isLoading,
	elements: { fields },
	crud: { create, update },
	onCloseModal,
	children,
}: IMasterForm) => {
	const methods = useForm({
		mode: 'onChange',
		resolver: useYupValidationResolver(fields),
		defaultValues: useGetDefaultValues(fields, data),
	})

	useAutoFocus(data, fields, methods)

	return (
		<ErrorBoundary error={error} refetch={refetch}>
			<CustomForm
				methods={methods}
				additionalChildren={children}
				isLoading={isLoading}
				onSubmit={data =>
					onSubmit({
						id,
						data,
						update,
						create,
						reset: methods.reset,
						refetch,
						onCloseModal,
					})
				}
			>
				<ContainerRenderInputFields fields={fields} isLoading={isLoading} />
			</CustomForm>
		</ErrorBoundary>
	)
}
