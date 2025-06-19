import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouteError } from 'react-router'
import { MuiCard } from '../mui'

type FormBoundaryProps = {
	errorMessage: any
	label?: string
	status?: any
	buttonProperty?: {
		label: string
		action: () => void
	}
}

export const FormBoundary = ({
	errorMessage,
	label,
	buttonProperty,
}: FormBoundaryProps) => {
	const { t } = useTranslation()

	const handleButtonClick = () => {
		buttonProperty ? buttonProperty.action() : window.location.reload()
	}

	return (
		<Container maxWidth='sm'>
			<Box
				sx={{
					m: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Box>
					<Typography component='h1' variant='h5' align='center'>
						{label ? label : 'Произошла ошибка'}
					</Typography>

					<br />

					<MuiCard
						cardProps={{
							variant: 'outlined',
							sx: {
								maxHeight: 200,
								overflow: 'auto',
								width: '100%',
								mb: 1,
							},
						}}
					>
						<Typography variant='body1'>{t(errorMessage)}</Typography>
					</MuiCard>

					<Grid
						container
						data-testid={'GridContainer'}
						spacing={2}
						direction='column'
						alignItems='center'
					>
						<Grid data-testid='GridItem'>
							<Button variant='text' size='small' onClick={handleButtonClick}>
								{buttonProperty
									? t(buttonProperty.label)
									: 'Перезагрузить страницу'}
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}

export const Boundary = () => {
	const error = useRouteError()
	const errorMessage = error ? error.message : 'messages.unforeseenError'

	return (
		<FormBoundary
			errorMessage={errorMessage}
			status={error?.response?.status}
		/>
	)
}

export class ErrorBoundaryForComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		// logErrorToMyService(error, info.componentStack)
	}

	render() {
		if (this.state.hasError) {
			// return this.props.fallback

			return <FormBoundary errorMessage={'messages.unforeseenError'} />
		}

		return this.props.children
	}
}
