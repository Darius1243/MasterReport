import { handleDragEnd } from '@/shared/libs/handleDragEnd'
import { DragEndEvent } from '@dnd-kit/core'
import { useState } from 'react'
import { IDocument } from '../types'

type ModalContentType = 'qr' | 'file' | null

export const useDocViewer = (initialDocuments: IDocument[] = []) => {
	const [modalContent, setModalContent] = useState<ModalContentType>(null)
	const [documents, setDocuments] = useState<IDocument[]>(
		initialDocuments || []
	)

	const onClose = () => setModalContent(null)

	const onAddFile = () => {
		setModalContent('file')
	}

	const onScanQr = () => {
		setModalContent('qr')
	}

	const handleAddDocument = (
		newDoc: Omit<IDocument, 'date' | 'type' | 'file'> & {
			file: File | string
		}
	) => {
		const docToAdd: IDocument = {
			...newDoc,
			file:
				typeof newDoc.file === 'string'
					? newDoc.file
					: URL.createObjectURL(newDoc.file),
			date: new Date(),
			type: typeof newDoc.file === 'string' ? 'text/plain' : newDoc.file.type,
		}

		setDocuments(prevDocs => [...prevDocs, docToAdd])
	}

	const handleDeleteDocument = (fileName: string) => {
		return new Promise<void>(resolve => {
			setDocuments(prevDocs => {
				const newDocs = prevDocs.filter(doc => doc.fileName !== fileName)
				return newDocs
			})
			resolve()
		})
	}

	const onDragEnd = (e: DragEndEvent) => {
		handleDragEnd(e, setDocuments)
	}

	return {
		documents,
		modalContent,
		onClose,
		onAddFile,
		onScanQr,
		handleAddDocument,
		handleDeleteDocument,
		onDragEnd,
	}
}
