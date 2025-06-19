import Box, { BoxProps } from '@mui/material/Box'

interface IMuiListProps extends BoxProps {
	children: React.ReactNode
}

export const MuiList = ({ children, sx, ...props }: IMuiListProps) => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				overflowX: 'auto',
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	)
}
