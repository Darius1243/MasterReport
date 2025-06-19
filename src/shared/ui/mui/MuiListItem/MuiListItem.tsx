import Paper, { PaperProps } from '@mui/material/Paper'

interface IMuiListProps extends PaperProps {
	children: React.ReactNode
}

export const MuiListItem = ({ children, sx, ...props }: IMuiListProps) => {
	return (
		<Paper
			elevation={0}
			sx={{
				display: 'flex',
				alignItems: 'center',
				p: 1,
				pl: 2,
				borderRadius: theme => theme.shape.borderRadius,
				transition: theme => theme.transitions.create('background-color'),
				'&:hover': { backgroundColor: 'action.hover' },
				...sx,
			}}
			{...props}
		>
			{children}
		</Paper>
	)
}
