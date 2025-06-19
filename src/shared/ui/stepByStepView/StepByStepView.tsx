import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { blue } from '@mui/material/colors'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { MuiCard } from '../mui'

const size = 34

interface IStepByStepView {
	children: React.ReactNode
	step?: number
	label?: string
	isVisible?: boolean
	isOnlyChildren?: boolean
}

export const StepByStepView = ({
	isVisible,
	step,
	label,
	isOnlyChildren,
	children,
}: IStepByStepView) => {
	return (
		<Fade in={isVisible ?? true} timeout={{ enter: 500, exit: 500 }}>
			{isOnlyChildren ? (
				<div>{children}</div>
			) : (
				<MuiCard>
					{step && label ? <SelectorStep step={step} label={label} /> : null}

					{children}
				</MuiCard>
			)}
		</Fade>
	)
}

const SelectorStep = ({ label, step }: { label: string; step: number }) => {
	const { t } = useTranslation()

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 2 }}>
			<Avatar sx={{ width: size, height: size, bgcolor: blue[500] }}>
				{step}
			</Avatar>

			<Typography variant='h6'>{t(label)}</Typography>
		</Box>
	)
}
