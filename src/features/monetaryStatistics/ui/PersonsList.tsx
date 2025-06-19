import { PersonWithStatistics } from '@/generated/graphql'
import { isEmpty } from '@/shared/libs'
import { NoData } from '@/shared/ui'
import { AmountButtonWithDetails } from '@/shared/ui/amountButton'
import { MuiList, MuiListItem } from '@/shared/ui/mui'
import { ListSkeleton } from '@/shared/ui/skeleton'
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface IPersonsList extends BoxProps {
	data: PersonWithStatistics[] | undefined
	isLoading: boolean
}

const headers = [{ title: 'Имя' }, { title: 'Приход, ₽' }]

export const PersonsList = ({
	data,
	isLoading,
	sx,
	...props
}: IPersonsList) => {
	if (isLoading) return <ListSkeleton count={3} />
	if (isEmpty(data)) return <NoData />

	return (
		<Box sx={{ mt: 2, ...sx }} {...props}>
			<Box sx={{ display: 'flex', px: 2, pb: 2 }}>
				{headers.map(({ title }, index) => (
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
				{data?.map(({ id, name, totalInflowAmount }) => (
					<MuiListItem key={id}>
						<Typography variant='body1' sx={{ flex: 1, textAlign: 'left' }}>
							{name}
						</Typography>

						<Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
							<AmountButtonWithDetails amount={totalInflowAmount} id={id} />
						</Box>
					</MuiListItem>
				))}
			</MuiList>
		</Box>
	)
}
