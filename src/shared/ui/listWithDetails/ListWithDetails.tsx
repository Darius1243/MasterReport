import { ApolloError } from '@apollo/client'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { AddButton } from '../addButton'
import { CustomList, MuiCard } from '../mui'

interface IListWithDetails<T> {
	data: T[]
	addButtonLabel: string
	loading: boolean
	error: ApolloError | undefined
	children: React.ComponentType<{ item?: T }>
}

export const ListWithDetails = <T extends { name?: string | null }>({
	data,
	loading,
	error,
	addButtonLabel,
	children: Component,
}: IListWithDetails<T>) => {
	const [selectedItem, setSelectedItem] = useState<T | null>(null)

	return (
		<Box
			display='flex'
			flexDirection={{ xs: 'column', sm: 'row' }}
			gap={2}
			height='100%'
		>
			<Stack flex={1} minHeight={0}>
				<CustomList
					items={data}
					labelKey={'name'}
					setSelectedItem={setSelectedItem}
					isLoading={loading}
					error={error}
					cardActions={
						<AddButton isDisabled={loading} label={addButtonLabel}>
							{Component}
						</AddButton>
					}
				/>
			</Stack>

			<MuiCard cardContentProps={{ sx: { p: 1.5 } }} enablePaddingBottom>
				<Box
					sx={{
						minHeight: 0,
						display: 'flex',
						flexDirection: 'column',
						'@media (max-width: 600px)': {
							flex: 1,
						},
					}}
				>
					{selectedItem ? <Component item={selectedItem} /> : null}
				</Box>
			</MuiCard>
		</Box>
	)
}
