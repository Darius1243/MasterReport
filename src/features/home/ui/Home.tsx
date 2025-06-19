import { Button } from '@/shared/ui/mui/Button'
import { MonetaryStatistics } from '@features/monetaryStatistics/ui'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router'

export const Home = () => {
	return (
		<Stack display={'flex'} flex={1} gap={2} overflow={'hidden'}>
			<Box display={'flex'} gap={1}>
				<Button
					component={Link}
					to='../inflow'
					variant='outlined'
					label='Добавить приход'
					icon={'AddIcon'}
					sx={{ flex: 1 }}
				/>

				<Button
					component={Link}
					to='../outflow'
					variant='outlined'
					label='Добавить расход'
					icon={'AddIcon'}
					sx={{ flex: 1 }}
				/>
			</Box>

			<MonetaryStatistics />
		</Stack>
	)
}
