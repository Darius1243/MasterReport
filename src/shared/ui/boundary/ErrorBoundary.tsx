import { ErrorAlertBanner } from '../mui/AlertBanner'
import { RefetchButton } from '../mui/Button'

interface IErrorBoundary {
	children: React.ReactNode
	refetch?: () => void
	error?: Error | null
}

export const ErrorBoundary = ({
	refetch,
	children,
	error = null,
	...props
}: IErrorBoundary) => {
	return error ? (
		<ErrorAlertBanner
			open={!!error}
			text={'Ошибка загрузки данных'}
			error={error}
			action={<RefetchButton refetch={refetch} />}
			{...props}
		/>
	) : (
		children
	)
}
