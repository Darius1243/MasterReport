import { getIcon } from '@/shared/libs/getIcon'
import { TypeIcon } from '@/shared/model/types'
import Box from '@mui/material/Box'
import List, { ListProps } from '@mui/material/List'
import ListItem, { ListItemProps } from '@mui/material/ListItem'
import ListItemButton, {
	ListItemButtonProps,
} from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Slide from '@mui/material/Slide'
import { SxProps, Theme } from '@mui/material/styles'
import { t } from 'i18next'
import { Link, LinkProps, useLocation } from 'react-router'
import { MuiDrawer } from '../mui/Drawer'

interface ListItemLinkProps extends ListItemProps {
	open: boolean
	primary: string
	customDisabled?: boolean
	to?: LinkProps['to']
	state?: LinkProps['state']
	icon?: TypeIcon
	selected?: boolean
	isIconAvatar?: boolean
	listItemButtonProps?: ListItemButtonProps
	iconSx?: SxProps<Theme>
	children?: React.ReactNode
}

const NAV_MENU_ITEMS = [
	{ primary: 'home', to: '/', icon: 'HomeIcon' },
	{ primary: 'inflow', to: '/inflow', icon: 'InflowIcon' },
	{ primary: 'outflow', to: '/outflow', icon: 'OutflowIcon' },
]

export const NavMenu = () => {
	const currentPathSegment = useLocation().pathname.split('/')[1] || ''

	return (
		<MuiDrawer>
			<ListInDrawer>
				{NAV_MENU_ITEMS.map(({ primary, to, icon }) => {
					const selected =
						(to === '/' && currentPathSegment === '') ||
						currentPathSegment === to.replace('/', '')

					return (
						<ListItemLink
							key={to}
							primary={`breadcrumb.${primary}`}
							to={to}
							icon={icon as TypeIcon}
							selected={selected}
							open={false}
						/>
					)
				})}
			</ListInDrawer>
		</MuiDrawer>
	)
}

const ListInDrawer = ({ children, sx, ...props }: ListProps) => {
	return (
		<List
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				flexGrow: 1,
				overflowX: 'hidden',
				...sx,
			}}
			{...props}
		>
			{children}
		</List>
	)
}

const ListItemLink = ({
	open,
	primary,
	icon,
	selected,
	to,
	state,
	...props
}: ListItemLinkProps) => {
	return (
		<ListItemInDrawer
			open={open}
			primary={primary}
			icon={icon}
			selected={selected}
			component={Link}
			to={to}
			state={state}
			{...props}
		/>
	)
}

const ListItemInDrawer = ({
	open,
	primary,
	icon,
	selected,
	listItemButtonProps,
	iconSx,
	customDisabled,
	children,
	...props
}: ListItemLinkProps) => {
	return (
		<ListItem disablePadding sx={{ display: 'block' }} {...props}>
			<ListItemButton
				selected={selected}
				{...listItemButtonProps}
				disableRipple={customDisabled}
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: 1,
					transition: 'all 0.3s ease',
					...listItemButtonProps?.sx,
				}}
			>
				<Icon
					icon={icon}
					sx={{
						minWidth: 0,
						justifyContent: 'center',
						mr: open ? 2 : 'auto',
						ml: '-2px',
						transition: 'all 0.3s ease',
						...iconSx,
					}}
				/>

				<Slide in={open} timeout={300} direction='right'>
					<Box sx={{ width: '100%' }}>
						<ListItemText
							primary={t(primary)}
							sx={theme => ({ ...theme.typography.navItem })}
						/>

						{children}
					</Box>
				</Slide>
			</ListItemButton>
		</ListItem>
	)
}

const Icon = ({ icon, sx }: { icon?: TypeIcon; sx: SxProps<Theme> }) => {
	if (icon) return <ListItemIcon sx={sx}>{getIcon(icon)}</ListItemIcon>
	else return null
}
