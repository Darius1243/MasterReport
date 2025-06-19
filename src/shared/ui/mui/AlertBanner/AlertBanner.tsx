import { Alert, Collapse, Tooltip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const AlertBanner = ({
	severity,
	open,
	error = undefined,
	text = undefined,
	action = undefined,
	children = undefined,
	...props
}) => {
	const { t } = useTranslation()

	return (
		<Collapse in={open}>
			<Alert severity={severity} action={action} {...props}>
				<Tooltip title={error?.message} placement='bottom'>
					{children ?? <Typography variant='body1'>{t(text ?? '')}</Typography>}
				</Tooltip>

				<Typography variant='body1s'>{error?.message}</Typography>
			</Alert>
		</Collapse>
	)
}
