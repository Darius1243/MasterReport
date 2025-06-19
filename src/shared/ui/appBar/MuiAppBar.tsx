import { useAppStore } from '@/shared/model/store'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import BreadcrumbsMUI from '@mui/material/Breadcrumbs'
import MuiLink from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useLocation } from 'react-router'
import { useShallow } from 'zustand/shallow'
import { IconButton } from '../mui/Button'

interface BreadcrumbItem {
	translationKey: string
	href: string
	isLast?: boolean
}

interface MuiAppBarProps {
	title: string
}

const capitalize = (s: string): string => {
	if (typeof s !== 'string' || s.length === 0) return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}

export const MuiAppBar = ({ title }: MuiAppBarProps) => {
	const { t } = useTranslation()
	const [currentTheme, setCurrentTheme] = useAppStore(
		useShallow(state => [state.currentTheme, state.setCurrentTheme])
	)
	const location = useLocation()

	const pathname = location.pathname

	const generateBreadcrumbs = (): BreadcrumbItem[] => {
		const pathSegments = pathname
			.split('/')
			.filter(segment => segment.length > 0)
		const breadcrumbs: BreadcrumbItem[] = []

		breadcrumbs.push({
			translationKey: 'breadcrumbs.home',
			href: '/',
			isLast: pathSegments.length === 0,
		})

		let currentPath = ''
		pathSegments.forEach((segment, index) => {
			currentPath += `/${segment}`
			const isLastItem = index === pathSegments.length - 1
			const translationKey = `breadcrumbs.${segment.toLowerCase()}`

			breadcrumbs.push({
				translationKey,
				href: currentPath,
				isLast: isLastItem,
			})
		})

		return breadcrumbs
	}

	const breadcrumbItems = generateBreadcrumbs()

	return (
		<AppBar sx={{ zIndex: 1300 }}>
			<Toolbar variant={'dense'}>
				<Typography variant='h6'>{title}</Typography>

				<Box mx={2} />

				{breadcrumbItems.length > 1 && (
					<BreadcrumbsMUI
						aria-label='breadcrumb'
						sx={{
							color: 'white',
							'.MuiLink-root:hover': { color: 'rgba(255, 255, 255, 0.85)' },
						}}
					>
						{breadcrumbItems.map(crumb => {
							const defaultLabel = capitalize(
								crumb.translationKey.substring(
									crumb.translationKey.lastIndexOf('.') + 1
								)
							)
							const label = t(crumb.translationKey, {
								defaultValue: defaultLabel,
							})

							return crumb.isLast ? (
								<Typography
									key={crumb.href}
									variant={'body1'}
									color={'inherit'}
								>
									{label}
								</Typography>
							) : (
								<MuiLink
									key={crumb.href}
									component={RouterLink}
									to={crumb.href}
									underline='hover'
									color={'inherit'}
									variant={'body1'}
								>
									{label}
								</MuiLink>
							)
						})}
					</BreadcrumbsMUI>
				)}

				<Box sx={{ flexGrow: 1 }} />

				<IconButton
					onClick={() =>
						setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
					}
					icon={
						currentTheme === 'light' ? 'Brightness7Icon' : 'Brightness4Icon'
					}
				/>
			</Toolbar>
		</AppBar>
	)
}
