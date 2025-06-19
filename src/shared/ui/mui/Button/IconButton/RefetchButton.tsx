import RefreshIcon from '@mui/icons-material/Refresh'
import { IconButton } from '@mui/material'

export const RefetchButton = ({ refetch, ...props }) => {
	return refetch ? (
		<IconButton onClick={() => refetch?.()} size={'small'} {...props}>
			<RefreshIcon />
		</IconButton>
	) : null
}
