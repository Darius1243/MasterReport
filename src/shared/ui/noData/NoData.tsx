import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const NoData = () => {
	return (
		<Box
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Typography variant='h6'>Нет данных</Typography>
		</Box>
	)
}
