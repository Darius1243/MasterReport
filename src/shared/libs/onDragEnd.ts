import { DragEndEvent } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { IDocument } from '../ui/docViewer/model'

interface IOnDragEnd extends DragEndEvent {
	setItems: React.Dispatch<React.SetStateAction<IDocument[]>>
	onSetFieldValue?: (name: string, value: number) => void
}

export const onDragEnd = ({
	active,
	over,
	setItems,
	onSetFieldValue,
}: IOnDragEnd): IDocument[] => {
	if (!active || !over) return []

	let result: IDocument[] = []

	if (active.id !== over.id) {
		setItems(prev => {
			const oldIndex = prev.findIndex(item => item.id === active.id)
			const newIndex = prev.findIndex(item => item.id === over.id)

			const res = arrayMove(prev, oldIndex, newIndex)

			onSetFieldValue?.(String(active.id), newIndex)

			result = res

			return res
		})
	}

	return result
}
