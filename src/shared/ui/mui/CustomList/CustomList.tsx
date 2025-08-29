import { CardActions, ListItemButton, Skeleton } from '@mui/material'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { useEffect, useState } from 'react'
import { ErrorBoundary } from '../../boundary'
import { MuiCard } from '../MuiCard'

interface ICustomList {
	labelKey: string
	items: any[]
	setSelectedItem: (item: any) => void
	label?: string
	isLoading?: boolean
	error?: Error
	refetch?: () => void
	cardActions?: React.ReactNode
}

export const CustomList = ({
	label,
	items,
	labelKey,
	setSelectedItem,
	isLoading = false,
	error = undefined,
	refetch = undefined,
	cardActions,
	...props
}: ICustomList) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

	useEffect(() => {
		setSelectedItem(items.find((_, i) => i === selectedIndex))
	}, [items, selectedIndex, setSelectedItem])

	return isLoading ? (
		<ListSkeleton />
	) : (
		<ErrorBoundary error={error} refetch={refetch}>
			<MuiCard cardContentProps={{ sx: { p: 0 } }}>
				<CardActions
					sx={{ borderBottom: 1, borderColor: 'divider', flexShrink: 0 }}
				>
					{cardActions}
				</CardActions>

				<List
					component='nav'
					sx={{ bgcolor: 'background.paper', overflowY: 'auto', flex: 1 }}
					disablePadding
				>
					{label ? <ListSubheader>{label}</ListSubheader> : null}

					{items.length === 0 ? (
						<ListItemText
							primary='Нет данных'
							sx={{ textAlign: 'center', py: 4, width: '100%' }}
						/>
					) : (
						items.map((item, i) => (
							<ListItemButton
								key={i}
								selected={selectedIndex === i}
								onClick={() => {
									setSelectedIndex(i)
									setSelectedItem(item)
								}}
								{...props}
							>
								<ListItemText primary={item[labelKey]} />
							</ListItemButton>
						))
					)}
				</List>
			</MuiCard>
		</ErrorBoundary>
	)
}

const ListSkeleton = () => {
	return (
		<List component='nav' sx={{ bgcolor: 'background.paper' }}>
			{[...Array(5)].map((_, i) => (
				<ListItemButton key={i}>
					<ListItemText primary={<Skeleton animation={'wave'} height={30} />} />
				</ListItemButton>
			))}
		</List>
	)
}
