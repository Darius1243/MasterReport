import { CSSObject, styled, Theme } from '@mui/material'
import OriginalMuiDrawer, { DrawerProps } from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'

const drawerWidth = 240

export const MuiDrawer = ({ open, children, ...props }: DrawerProps) => {
	return (
		<Drawer open={open} component={'nav'} variant={'permanent'} {...props}>
			<Toolbar variant='dense' />

			{children}
		</Drawer>
	)
}

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: 50,
})

const Drawer = styled(OriginalMuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	variants: [
		{
			props: ({ open }) => open,
			style: {
				...openedMixin(theme),
				'& .MuiDrawer-paper': openedMixin(theme),
			},
		},
		{
			props: ({ open }) => !open,
			style: {
				...closedMixin(theme),
				'& .MuiDrawer-paper': closedMixin(theme),
			},
		},
	],
}))
