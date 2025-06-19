import { AlertBanner } from './AlertBanner'

export const ErrorAlertBanner = ({ text, action, open, error = undefined, ...props }) => {
	console.error('error', error)

	return <AlertBanner open={open} severity={'error'} text={text} action={action} error={error} {...props} />
}
