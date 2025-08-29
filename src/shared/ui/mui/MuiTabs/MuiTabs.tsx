import { isEmpty } from '@/shared/libs'
import { Theme } from '@emotion/react'
import { Fade } from '@mui/material'
import Box from '@mui/material/Box'
import { styled, SxProps } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs, { tabsClasses, TabsProps } from '@mui/material/Tabs'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary } from '../../boundary'

interface IMuiTabsProps extends TabsProps {
	tabs: {
		label: string
		component: React.ReactNode
	}[]
	handleTabValueChange?: (value: number) => void
	isLoading?: boolean
	error?: Error
	refetch?: () => void
	initialTabValue?: number
	keepMounted?: boolean
	rootBoxSx?: SxProps<Theme>
	children?: React.ReactNode
}

const StyledTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		transition: 'all 0.3s ease',
	},
})

const StyledTabPanel = styled(Box)(() => ({
	flex: 1,
	position: 'relative',
	overflow: 'hidden',
	transition: 'opacity 0.3s ease',
	width: '100%',
	height: '100%',
	[`& .${tabsClasses.scrollButtons}`]: { '&.Mui-disabled': { opacity: 0.3 } },
}))

export const MuiTabs = ({
	tabs = [],
	handleTabValueChange = undefined,
	error = undefined,
	refetch = undefined,
	initialTabValue = 0,
	keepMounted = false,
	orientation = 'horizontal',
	rootBoxSx,
	children,
	...props
}: IMuiTabsProps) => {
	const { t } = useTranslation()

	const [value, setValue] = useState(initialTabValue || 0)

	if (isEmpty(tabs)) return null

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
		handleTabValueChange?.(newValue)
	}

	return (
		<ErrorBoundary error={error} refetch={refetch}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: orientation === 'vertical' ? 'row' : 'column',
					overflow: 'hidden',
					gap: 2,
					height: '100%',
					...rootBoxSx,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						pr: 1,
					}}
				>
					<StyledTabs
						value={value}
						onChange={handleChange}
						orientation={orientation}
						variant='scrollable'
						{...props}
					>
						{tabs.length > 1 &&
							tabs.map(({ label }, index) => (
								<Tab key={`${label}_${index}`} label={t(label)} wrapped />
							))}
					</StyledTabs>

					{children}
				</Box>

				<StyledTabPanel>
					<TabPanels value={value} tabs={tabs} keepMounted={keepMounted} />
				</StyledTabPanel>
			</Box>
		</ErrorBoundary>
	)
}

const TabPanels = ({ value, tabs, keepMounted = false, ...props }) => {
	return tabs.map((tab, index) => {
		const isActive = value === index
		const shouldRender = keepMounted ? true : isActive

		return (
			<Fade in={isActive} key={`${tab.label}_${index}`} timeout={300}>
				<Box
					role='tabpanel'
					id={`vertical-tabpanel-${index}`}
					aria-labelledby={`vertical-tab-${index}`}
					sx={{
						p: 0.5,
						position: keepMounted ? 'absolute' : 'relative',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						display: shouldRender ? 'block' : 'none',
						overflow: 'hidden',
					}}
					{...props}
				>
					{shouldRender && tab.component}
				</Box>
			</Fade>
		)
	})
}
