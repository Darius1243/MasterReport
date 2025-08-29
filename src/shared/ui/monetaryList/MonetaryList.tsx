import { isEmpty } from '@/shared/libs'
import { FieldConfig } from '@/shared/model/types'
import { NoData } from '@/shared/ui'
import { MuiList, MuiListItem } from '@/shared/ui/mui'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type MonetaryListProps<T> = {
	data: T[]
	fields: FieldConfig<T>[]
	title?: string
}

export function MonetaryList<T extends { id: number }>({
	data,
	fields,
	title,
}: MonetaryListProps<T>) {
	if (isEmpty(data)) return <NoData />

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				maxHeight: '55vh',
			}}
		>
			{title && (
				<Typography variant='h6' sx={{ flexShrink: 0 }}>
					{title}
				</Typography>
			)}

			<MuiList sx={{ display: 'table' }}>
				{data.map(item => (
					<MuiListItem
						key={item.id}
						sx={{
							display: 'table-row',
							'& > .MuiTypography-root': {
								display: 'table-cell',
								padding: theme => theme.spacing(1, 2),
								borderRight: theme => `1px solid ${theme.palette.divider}`,
								textAlign: 'center',
								verticalAlign: 'middle',
							},
							'& > .MuiTypography-root:last-child': {
								borderRight: 'none',
							},
						}}
					>
						{fields.map(({ render }, index) => (
							<Typography
								key={index}
								variant='body1'
								sx={{
									'& > *': { width: '100%' },
								}}
							>
								{render(item)}
							</Typography>
						))}
					</MuiListItem>
				))}
			</MuiList>
		</Box>
	)
}
