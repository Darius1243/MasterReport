import { useCallback, useState } from 'react'

export const useFileDrop = (onDrop: (files: File[]) => void) => {
	const [isOver, setIsOver] = useState(false)

	const handleDragOver = useCallback((event: DragEvent) => {
		event.preventDefault()
		// Check if the dragged item is a file
		const isFile = Array.from(event.dataTransfer?.types || []).includes('Files')
		if (isFile) {
			setIsOver(true)
		} else {
			setIsOver(false) // Ensure it's false if not a file
		}
	}, [])

	const handleDragLeave = useCallback(() => {
		setIsOver(false)
	}, [])

	const handleDrop = useCallback(
		(event: DragEvent) => {
			event.preventDefault()
			setIsOver(false)
			const files = Array.from(event.dataTransfer?.files || [])
			if (files.length > 0) {
				onDrop(files)
			}
		},
		[onDrop]
	)

	const addEventListeners = (element: HTMLElement | null) => {
		if (element) {
			element.addEventListener('dragover', handleDragOver)
			element.addEventListener('dragleave', handleDragLeave)
			element.addEventListener('drop', handleDrop)
		}
	}

	const removeEventListeners = (element: HTMLElement | null) => {
		if (element) {
			element.removeEventListener('dragover', handleDragOver)
			element.removeEventListener('dragleave', handleDragLeave)
			element.removeEventListener('drop', handleDrop)
		}
	}

	return { isOver, addEventListeners, removeEventListeners }
}
