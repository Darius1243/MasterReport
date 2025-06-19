import { BORDER_RADIUS } from '@/shared/model/constants'
import Box from '@mui/material/Box'
import Card, { CardProps } from '@mui/material/Card'
import CardContent, { CardContentProps } from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

interface IMuiCardProps {
	title?: string
	actions?: React.ReactNode
	children: React.ReactNode
	cardProps?: CardProps
	cardContentProps?: CardContentProps
}

export const MuiCard = ({
	title,
	actions,
	cardProps,
	cardContentProps,
	children,
}: IMuiCardProps) => {
	const { t } = useTranslation()

	return (
		<Card
			{...cardProps}
			sx={{ flex: 1, borderRadius: BORDER_RADIUS, ...cardProps?.sx }}
		>
			{title || actions ? (
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
					px={3}
					pt={1}
				>
					{title ? (
						<Typography
							variant='h6'
							component='div'
							sx={{ fontWeight: 'normal' }}
						>
							{t(title)}
						</Typography>
					) : null}

					{actions}
				</Box>
			) : null}

			<CardContent
				{...cardContentProps}
				sx={{ height: '100%', py: 0, ...cardContentProps?.sx }}
			>
				{children}
			</CardContent>
		</Card>
	)
}
