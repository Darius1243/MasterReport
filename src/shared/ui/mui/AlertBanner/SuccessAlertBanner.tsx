import { AlertBanner } from './AlertBanner'

export const SuccessAlertBanner = ({ open, text = undefined, action = undefined, ...props }) => {
	return <AlertBanner open={open} severity={'success'} text={text} action={action} {...props} />
}
