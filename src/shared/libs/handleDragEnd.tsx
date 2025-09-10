import { DragEndEvent } from '@dnd-kit/core'
import { Dispatch, SetStateAction } from 'react'
import { IDocument } from '../ui/docViewer/model'
import { onDragEnd } from './onDragEnd'

export const handleDragEnd = (
	e: DragEndEvent,
	setItems: Dispatch<SetStateAction<IDocument[]>>
) => {
	return onDragEnd({ ...e, setItems })
}
