import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const Fallback = () => {
	return (
		<Box
			sx={{
				height: '100svh',
				width: '100svw',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress />
		</Box>
	)
}
