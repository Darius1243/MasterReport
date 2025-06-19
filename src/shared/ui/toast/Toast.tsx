import { getErrorMessage } from '@/shared/libs'
import { toast } from 'react-toastify'
import { CustomToast } from './CustomToast'

export async function showToastPromise<T>(
	promise: Promise<T>,
	texts?: { pending: string; success: string; error: string }
): Promise<T> {
	const pendingText = texts?.pending ?? 'Запрос выполняется 🤔'
	const successText = texts?.success ?? 'Запрос выполнен 👌'
	const errorBaseText = texts?.error ?? 'Произошла ошибка 🤯'

	return await toast.promise(promise, {
		pending: {
			render: props => <CustomToast {...props} promise={pendingText} />,
		},
		success: {
			render: props => <CustomToast {...props} text={successText} />,
		},
		error: {
			render: ({ data, ...rest }) => (
				<CustomToast
					{...rest}
					text={errorBaseText}
					secondaryText={getErrorMessage(data)}
				/>
			),
		},
	})
}

export function showToastError(message?: string, errorDetails?: any): void {
	const baseMessage = message ?? 'Произошла ошибка 🤯'
	const details = getErrorMessage(errorDetails)

	toast.error(<CustomToast text={baseMessage} secondaryText={details} />)
}
