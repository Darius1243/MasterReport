import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { CSSProperties } from 'react'

interface ISortableItem {
	id: number | string
	children: React.ReactNode
	sx?: SxProps<Theme>
}

export const SortableItem = ({ id, children, ...props }: ISortableItem) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id, resizeObserverConfig: {} })

	const style: CSSProperties = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<Box
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			{...props}
		>
			{children}
		</Box>
	)
}
