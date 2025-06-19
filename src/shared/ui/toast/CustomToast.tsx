import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ToastContentProps } from 'react-toastify'

interface IToastContentProps extends Omit<ToastContentProps, 'data'> {
	text?: string
	secondaryText?: string
	promise?: string
}

export const CustomToast = ({
	text,
	secondaryText,
	promise,
}: IToastContentProps) => {
	return (
		<Box>
			{text && <Typography variant='h6'>{text}</Typography>}

			{secondaryText && (
				<Typography variant='h6' sx={{ opacity: 0.8, mt: text ? 0.5 : 0 }}>
					{secondaryText}
				</Typography>
			)}

			{promise && (
				<Box sx={{ mt: text || secondaryText ? 2 : 0 }}>
					<Typography variant='h6'>{promise}</Typography>
				</Box>
			)}
		</Box>
	)
}
