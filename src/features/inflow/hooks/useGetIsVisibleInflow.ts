import { useAppStore } from '@/shared/model/store'
import { useShallow } from 'zustand/shallow'

export const useGetIsVisibleInflow = () => {
	const [selectedPerson, selectedObject, selectedJob] = useAppStore(
		useShallow(state => [
			state.selectedPerson,
			state.selectedObject,
			state.selectedJob,
		])
	)

	const isVisible = (step: number) => {
		switch (step) {
			case 2:
				return !!selectedPerson
			case 3:
				return !!selectedObject
			case 4:
				return !!selectedJob
			default:
				return true
		}
	}

	return isVisible
}
