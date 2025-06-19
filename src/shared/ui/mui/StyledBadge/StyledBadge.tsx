import styled from '@emotion/styled'
import Badge, { BadgeProps } from '@mui/material/Badge'

type TStatus = 'online' | 'offline' | 'away'

interface IStyledBadge extends BadgeProps {
	status?: TStatus
}

export const StyledBadge = ({ children, status = 'online', ...props }: IStyledBadge) => {
	return (
		<StyledBadgeComp
			status={status}
			overlap='circular'
			variant='dot'
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			{...props}
		>
			{children}
		</StyledBadgeComp>
	)
}

const StyledBadgeComp = styled(Badge)<{ status: TStatus }>(({ theme, status }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: getStatusColor(status),
		color: getStatusColor(status),
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))

const getStatusColor = (status: TStatus) => {
	switch (status) {
		case 'online':
			return '#00BE6F'
		case 'offline':
			return '#f44336'
		case 'away':
			return '#ff9800'
		default:
			return '#9e9e9e'
	}
}
