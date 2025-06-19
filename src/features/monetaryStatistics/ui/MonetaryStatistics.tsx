import { useGetPersons } from '@/shared/hooks/person'
import { MuiCard } from '@/shared/ui/mui'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AddPersonButton } from './AddPersonButton'
import { PersonsList } from './PersonsList'

export const MonetaryStatistics = () => {
	const { data, refetch, loading } = useGetPersons()

	return (
		<MuiCard
			cardContentProps={{ sx: { display: 'flex', flexDirection: 'column' } }}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexShrink: 0,
					py: 1,
				}}
			>
				<Typography variant='h4'>Статистика</Typography>

				<AddPersonButton refetch={refetch} />
			</Box>

			<Box sx={{ flexGrow: 1, overflow: 'auto' }}>
				<PersonsList data={data} isLoading={loading} />
			</Box>
		</MuiCard>
	)
}
