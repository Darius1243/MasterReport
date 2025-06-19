import { Inflow } from '@/generated/graphql'
import { formatDate, isEmpty } from '@/shared/libs'
import { AmountButton, NoData } from '@/shared/ui'
import { MuiList, MuiListItem } from '@/shared/ui/mui'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const Inflows = ({ data }: { data: Inflow[] }) => {
	const theme = useTheme()

	if (isEmpty(data)) return <NoData />

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				maxHeight: '55vh',
			}}
		>
			<Typography variant='h6' sx={{ flexShrink: 0 }}>
				Приходы
			</Typography>

			<MuiList sx={{ flexGrow: 1, overflow: 'auto', overflowX: 'hidden' }}>
				{data?.map(({ id, person, facility, job, amount, date }) => (
					<MuiListItem
						key={id}
						sx={{
							display: 'flex',
							alignItems: 'center',
							width: 'max-content',
							gap: 1,
							'& > .MuiTypography-root:nth-child(-n+3)': {
								paddingRight: theme.spacing(1.5),
								borderRight: `1px solid ${theme.palette.divider}`,
							},
							'& > .MuiTypography-root:last-child': {
								paddingLeft: theme.spacing(1.5),
								borderLeft: `1px solid ${theme.palette.divider}`,
							},
						}}
					>
						<Typography variant='body1'>{person.name}</Typography>
						<Typography variant='body1'>{facility.name}</Typography>
						<Typography variant='body1'>{job.name}</Typography>
						<AmountButton amount={amount} />
						<Typography variant='body1'>{formatDate(date)}</Typography>
					</MuiListItem>
				))}
			</MuiList>
		</Box>
	)
}
