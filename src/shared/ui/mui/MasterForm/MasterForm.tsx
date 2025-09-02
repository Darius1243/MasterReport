import { useGetDefaultValues, useYupValidationResolver } from '@/shared/hooks'
import { useAutoFocus } from '@/shared/hooks/useAutoFocus'
import { isEmpty } from '@/shared/libs'
import { IWidget } from '@/shared/model/types'
import { TValue } from '@/shared/model/types/TValue'
import { useForm, UseFormReturn } from 'react-hook-form'
import { ErrorBoundary } from '../../boundary'
import { ContainerRenderInputFields } from './ContainerRenderInputFields'
import { CustomForm } from './CustomForm'
import { generateValidations } from './generateValidations'
import { onSubmit } from './lib'

type FormData = Record<string, number | string | boolean>

interface IMasterForm {
	id?: number
	data?: FormData | null
	error: Error | undefined
	refetch?: () => void
	isLoading: boolean
	elements: IWidget
	crud: {
		create: (args: { variables: { data: any } }) => Promise<any>
		update: (args: { variables: { id: number; data: any } }) => Promise<any>
	}
	onCloseModal?: () => void
	children?: React.ReactNode
}

export const MasterForm = ({
	id,
	data,
	error,
	refetch,
	isLoading,
	elements,
	crud,
	onCloseModal,
	children,
}: IMasterForm) => {
	const { fields } = elements
	const validationSchema = generateValidations(fields)
	const { create, update } = crud

	const methods = useForm({
		mode: 'onChange',
		resolver: useYupValidationResolver(validationSchema),
		defaultValues: useGetDefaultValues(fields, data),
	})

	const {
		formState: { dirtyFields, errors, isValid: _isValid },
		handleSubmit,
	} = methods

	useAutoFocus(methods, data, setData, fields)

	const isDirty = !isEmpty(dirtyFields)
	const isValid = !isLoading && _isValid && isEmpty(errors)
	const isVisible = isValid && isDirty

	const fetchData = async (data: FormData) => {
		const resp = id
			? await update({ variables: { id, data: transformData(data, id) } })
			: await create({ variables: { data: data } })

		methods.reset({})
		refetch?.()
		onCloseModal?.()

		return resp
	}

	return (
		<ErrorBoundary error={error} refetch={refetch}>
			<CustomForm
				methods={methods}
				onSubmit={handleSubmit(data => onSubmit(data, fetchData))}
				isVisible={isVisible}
				additionalChildren={children}
			>
				<ContainerRenderInputFields fields={fields} isLoading={isLoading} />
			</CustomForm>
		</ErrorBoundary>
	)
}

const setData = (data: FormData, methods: UseFormReturn) => {
	methods.reset(data)
	methods.trigger()
}

const transformData = (
	formData: FormData,
	entityId?: number
): Record<string, TValue> => {
	const GHOST_FIELD_PREFIX = '_'
	const cleanedData: Record<string, any> = {}

	for (const key in formData) {
		if (Object.prototype.hasOwnProperty.call(formData, key)) {
			if (!key.startsWith(GHOST_FIELD_PREFIX)) {
				cleanedData[key] = formData[key]
			}
		}
	}

	if (entityId != undefined && cleanedData.hasOwnProperty('id')) {
		delete cleanedData.id
	}

	return cleanedData
}
