import { BaseIconButton } from '@components/customComponents/Button'
import Box from '@mui/material/Box'
import { MRT_ShowHideColumnsButton, MRT_ToggleFiltersButton } from 'material-react-table'
import { TableGlobalFilter } from './TableGlobalFilter'

export const InternalActions = ({ table, wordWrap, setWordWrap = undefined, setGlobalFilter }) => {
	return (
		<Box display={'flex'}>
			{/* {enableRowOrderingExternal ? (
				<BaseIconButton
					icon={enableRowOrdering ? <MoveRowsDoNot /> : <MoveRows />}
					onClick={() => {
						setEnableRowOrdering(!enableRowOrdering)
					}}
				/>
			) : null} */}

			{/* <MRT_GlobalFilterTextField table={table} /> */}
			{/* <MRT_ToggleGlobalFilterButton table={table} /> */}

			<BaseIconButton
				// color={'secondary'}
				tooltip={wordWrap ? 'noWrapText' : 'wrapText'}
				icon={wordWrap ? 'ReorderIcon' : 'WrapTextIcon'}
				onClick={() => setWordWrap && setWordWrap(prev => !prev)}
			/>

			<MRT_ToggleFiltersButton table={table} />
			<MRT_ShowHideColumnsButton table={table} />
			<TableGlobalFilter setGlobalFilter={setGlobalFilter} />
		</Box>
	)
}
