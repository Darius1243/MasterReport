import { isEmpty } from '@/shared/libs'
import { TData } from '@/shared/model/types'
import Box from '@mui/material/Box'
import { KeyboardEvent } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'
import { Button } from '../Button'

interface IFormProps {
	methods: UseFormReturn<any>
	onSubmit: (data: TData) => Promise<void>
	style?: React.CSSProperties
	isLoading?: boolean
	additionalChildren?: React.ReactNode
	children: React.ReactNode
}

export const CustomForm = ({
	methods,
	onSubmit,
	additionalChildren,
	isLoading,
	children,
}: IFormProps) => {
	const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Enter') {
			e.preventDefault()
		}
	}

	const { isValid: _isValid, dirtyFields, errors } = methods.formState

	const isDirty = !isEmpty(dirtyFields)
	const isValid = !isLoading && _isValid && isEmpty(errors)
	const isVisible = isValid && isDirty

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				onKeyDown={e => checkKeyDown(e)}
				noValidate
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
				}}
			>
				{children}

				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					sx={{ mt: 2 }}
				>
					<Button
						label={'save'}
						icon={'SaveIcon'}
						type={'submit'}
						disabled={!isVisible}
						sx={{ alignSelf: 'flex-start', ml: 2 }}
					/>

					{additionalChildren}
				</Box>
			</form>
		</FormProvider>
	)
}
