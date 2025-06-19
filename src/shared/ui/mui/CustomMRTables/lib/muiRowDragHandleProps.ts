import { MRTableV2Props } from '@/interfaces'
import { SEQUENCE_NO } from '@constants/Constants'
import { cloneDeep } from 'lodash'
import { MRT_Row, MRT_RowData, MRT_TableInstance } from 'material-react-table'

interface IMuiRowDragHandleProps {
	table: MRT_TableInstance<MRT_RowData>
	data: MRTableV2Props['data']
	setData?: MRTableV2Props['setData']
	setCudRows?: MRTableV2Props['setCudRows']
}

export const MuiRowDragHandleProps = ({ table, data, setData, setCudRows }: IMuiRowDragHandleProps) => ({
	onDragEnd: () => {
		const { draggingRow, hoveredRow } = table.getState()

		if (hoveredRow && draggingRow) {
			const cloneData = cloneDeep(data)

			table.resetRowSelection()
			cloneData.splice((hoveredRow as MRT_Row<MRT_RowData>).index, 0, cloneData.splice(draggingRow.index, 1)[0])

			const newData = cloneData.map(
				(row, index) => {
					if (row[SEQUENCE_NO] !== index) {
						const newRow = { ...row, [SEQUENCE_NO]: index }
						setCudRows?.(prev => [...prev, newRow])
						return newRow
					}
					return row
				},

				// ({ ...d, [SEQUENCE_NO]: index })
			)

			setData?.(newData)
			// setCudRows?.(newData)
		}
	},
})
