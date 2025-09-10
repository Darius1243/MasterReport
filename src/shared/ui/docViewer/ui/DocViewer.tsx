import { MuiCard, MuiModal } from '@/shared/ui/mui'
import { CustomDndContext } from '@contexts/CustomDndContext'
import { NoData } from '../../noData'
import { useDocViewer } from '../model/hooks/useDocViewer'
import { AddFileForm } from './AddFileForm'
import { DocumentDropZone } from './DocumentDropZone'
import { DocumentList } from './DocumentList'
import { DocViewerActions } from './DocViewerActions'

export const DocViewer = () => {
	const {
		documents,
		modalContent,
		onClose,
		onAddFile,
		onScanQr,
		handleAddDocument,
		handleDeleteDocument,
		onDragEnd,
	} = useDocViewer()

	return (
		<CustomDndContext
			items={documents?.map(doc => doc.id)}
			handleDragEnd={onDragEnd}
		>
			<MuiCard
				actions={<DocViewerActions onScanQr={onScanQr} onAddFile={onAddFile} />}
			>
				<DocumentDropZone onAddDocument={handleAddDocument}>
					{documents.length === 0 ? (
						<NoData type='empty-documents' />
					) : (
						<DocumentList
							documents={documents}
							onDelete={handleDeleteDocument}
						/>
					)}
				</DocumentDropZone>
			</MuiCard>

			<MuiModal
				title={
					modalContent === 'qr'
						? 'Сканировать QR-код'
						: 'Добавить новый документ'
				}
				open={modalContent !== null}
				onClose={onClose}
				isFullScreen={modalContent === 'qr'}
			>
				<AddFileForm
					onCloseModal={onClose}
					formType={modalContent}
					onAddDocument={handleAddDocument}
				/>
			</MuiModal>
		</CustomDndContext>
	)
}
