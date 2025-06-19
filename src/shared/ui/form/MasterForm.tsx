import { useGetDefaultValues, useYupValidationResolver } from '@/shared/hooks'
import { isEmpty } from '@/shared/libs'
import { IWidget } from '@/shared/model/types'
import { useEffect } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { ErrorBoundary } from '../boundary'
import { RenderInputFields } from '../mui/MasterForm'
import { CustomForm } from './CustomForm'
import { onSubmit } from './lib'

type FormData = Record<string, number | string | boolean>

interface IMasterForm {
	id?: number
	data?: FormData
	error: Error | undefined
	refetch: () => void
	isLoading: boolean
	elements: IWidget
	crud: {
		create: (args: { variables: { data: any } }) => Promise<any>
		update: (args: { variables: { id: number; data: any } }) => Promise<any>
	}
	onCloseModal?: () => void
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
}: IMasterForm) => {
	const { fields, validationSchema } = elements
	const { create, update } = crud

	const methods = useForm({
		mode: 'onChange',
		resolver: useYupValidationResolver(validationSchema),
		defaultValues: useGetDefaultValues({ fields }),
	})

	useEffect(() => {
		if (!isEmpty(data) && !!data) setData(data, methods)
	}, [data, methods])

	const {
		formState: { dirtyFields, errors, isValid: _isValid },
		handleSubmit,
	} = methods

	const isDirty = !isEmpty(dirtyFields)
	const isValid = !isLoading && _isValid && isEmpty(errors)
	const isVisible = isValid && isDirty

	const fetchData = async (data: FormData) => {
		const resp = id
			? await update({ variables: { id, data } })
			: await create({ variables: { data } })

		methods.reset({})
		refetch()
		onCloseModal?.()

		return resp
	}

	return (
		<ErrorBoundary error={error} refetch={refetch}>
			<CustomForm
				methods={methods}
				onSubmit={handleSubmit(data => onSubmit(data, fetchData))}
				isVisible={isVisible}
			>
				<RenderInputFields fields={fields} isLoading={isLoading} />
			</CustomForm>
		</ErrorBoundary>
	)
}

const setData = (data: FormData, methods: UseFormReturn) => {
	methods.reset(data)
	methods.trigger()
}
