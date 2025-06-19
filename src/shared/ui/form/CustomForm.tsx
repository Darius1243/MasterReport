import { FormEventHandler, KeyboardEvent } from 'react'
import { FormProvider } from 'react-hook-form'
import { Button } from '../mui/Button'

interface IFormProps {
	methods: any
	onSubmit: FormEventHandler<HTMLFormElement>
	children: React.ReactNode
	style?: React.CSSProperties
	isVisible?: boolean
}

export const CustomForm = ({
	methods,
	onSubmit,
	isVisible,
	children,
}: IFormProps) => {
	const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Enter') {
			e.preventDefault()
		}
	}

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={onSubmit}
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
				}}
				onKeyDown={e => checkKeyDown(e)}
				noValidate
			>
				{children}

				<Button
					label={'save'}
					icon={'SaveIcon'}
					type={'submit'}
					disabled={!isVisible}
					sx={{ alignSelf: 'flex-start', ml: 2 }}
				/>
			</form>
		</FormProvider>
	)
}
