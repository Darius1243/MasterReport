import { ResponsiveGrid } from '@/shared/ui/responsiveGrid'
import { useTheme } from '@mui/material/styles'
import { useEffect, useRef } from 'react'
import { IDocument } from '../model'
import { useFileDrop } from '../model/hooks/useFileDrop'

interface DocumentDropZoneProps {
	onAddDocument: (
		doc: Omit<IDocument, 'date' | 'type' | 'file'> & {
			file: File | string
		}
	) => void
	children: React.ReactNode
}

export const DocumentDropZone = ({
	onAddDocument,
	children,
}: DocumentDropZoneProps) => {
	const theme = useTheme()
	const dropRef = useRef<HTMLDivElement>(null)

	const handleFilesDrop = (files: File[]) => {
		files.forEach(file => {
			onAddDocument({ id: Math.random(), fileName: file.name, file })
		})
	}

	const { isOver, addEventListeners, removeEventListeners } =
		useFileDrop(handleFilesDrop)

	useEffect(() => {
		const currentRef = dropRef.current
		if (currentRef) addEventListeners(currentRef)
		return () => {
			if (currentRef) removeEventListeners(currentRef)
		}
	}, [addEventListeners, removeEventListeners])

	return (
		<ResponsiveGrid
			ref={dropRef}
			container
			sx={{
				alignContent: 'flex-start',
				border: isOver ? `4px solid ${theme.palette.primary.main}` : 'none',
				transition: 'border-color 0.2s, border-style 0.2s',
				minHeight: '200px',
			}}
		>
			{children}
		</ResponsiveGrid>
	)
}
