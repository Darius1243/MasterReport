import {
	closestCenter,
	DndContext,
	DragEndEvent,
	KeyboardSensor,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import {
	restrictToHorizontalAxis,
	restrictToVerticalAxis,
} from '@dnd-kit/modifiers'
import {
	horizontalListSortingStrategy,
	rectSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'

interface ICustomDndContext {
	items: string[] | number[]
	handleDragEnd: (e: DragEndEvent) => void
	axis?: 'horizontal' | 'vertical'
	children: React.ReactNode
}

export const CustomDndContext = ({
	items,
	handleDragEnd,
	children,
	axis,
}: ICustomDndContext) => {
	const sensors = useGetSensors()

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
			modifiers={
				!axis
					? []
					: axis === 'vertical'
					? [restrictToVerticalAxis]
					: [restrictToHorizontalAxis]
			}
		>
			<SortableContext
				strategy={
					!axis
						? rectSortingStrategy
						: axis === 'vertical'
						? verticalListSortingStrategy
						: horizontalListSortingStrategy
				}
				items={items}
			>
				{children}
			</SortableContext>
		</DndContext>
	)
}

// ;<DndContext
// 	sensors={sensors}
// 	collisionDetection={closestCenter}
// 	onDragEnd={handleDragEnd}
// >
// 	<SortableContext strategy={rectSortingStrategy} items={items}>
// 		{children}
// 	</SortableContext>
// </DndContext>

const useGetSensors = () => {
	return useSensors(
		useSensor(MouseSensor, { activationConstraint }),
		useSensor(TouchSensor, { activationConstraint }),
		useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
	)
}

const activationConstraint = { tolerance: 5, delay: 0 }
