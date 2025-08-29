import { MuiCard } from '@/shared/ui/mui'
import Typography from '@mui/material/Typography'
import { PersonsWithStatistics } from './PersonsWithStatistics'

export const MonetaryStatistics = () => {
	return (
		<MuiCard
			cardContentProps={{
				sx: { display: 'flex', flexDirection: 'column', flexShrink: 0, py: 1 },
			}}
		>
			<Typography variant='h4'>Статистика</Typography>

			<PersonsWithStatistics />
		</MuiCard>
	)
}
