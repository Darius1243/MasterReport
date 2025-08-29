import { useGetPersonsWithStatistics } from '@/shared/hooks/person'
import { isEmpty } from '@/shared/libs'
import { NoData } from '@/shared/ui'
import { MuiList, MuiListItem } from '@/shared/ui/mui'
import { ListSkeleton } from '@/shared/ui/skeleton'
import { InflowByPerson } from '@features/inflow/ui'
import { OutflowByPerson } from '@features/outflow/ui'
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const HEADERS = [
	{ title: 'Имя' },
	{ title: 'Приход, ₽' },
	{ title: 'Расход, ₽' },
]

export const PersonsWithStatistics = ({ sx, ...props }: BoxProps) => {
	const { data, loading } = useGetPersonsWithStatistics()

	if (loading) return <ListSkeleton count={3} />
	if (isEmpty(data)) return <NoData />

	return (
		<Box sx={{ mt: 2, flexGrow: 1, overflow: 'auto', ...sx }} {...props}>
			<Box sx={{ display: 'flex', px: 2, pb: 2 }}>
				{HEADERS.map(({ title }, index) => (
					<Typography
						key={title}
						variant='body1'
						fontWeight={'bold'}
						sx={{ flex: 1, textAlign: index === 0 ? 'left' : 'center' }}
					>
						{title}
					</Typography>
				))}
			</Box>

			<MuiList>
				{data?.map(({ id, name, totalInflowAmount, totalOutflowAmount }) => (
					<MuiListItem key={id}>
						<Typography variant='body1' sx={{ flex: 1, textAlign: 'left' }}>
							{name}
						</Typography>

						<Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
							<InflowByPerson id={id} amount={totalInflowAmount} />
						</Box>

						<Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
							<OutflowByPerson id={id} amount={-totalOutflowAmount} />
						</Box>
					</MuiListItem>
				))}
			</MuiList>
		</Box>
	)
}
