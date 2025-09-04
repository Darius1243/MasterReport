import { BORDER_RADIUS, TDocumentType } from '@/shared/model/constants'
import { QRScanner } from '@features/qrScanner/ui'
import { InsertDriveFile } from '@mui/icons-material'
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material'
import { useState } from 'react'
import { MuiCard, MuiModal } from '../../mui'
import { Button } from '../../mui/Button'
import { ResponsiveGrid } from '../../responsiveGrid'

interface IDocument {
	fileName: string
	file: string
	date: Date
	type: string
}

export const DocViewer = ({
	documents = DATA,
	documentType,
}: {
	documents?: IDocument[]
	documentType: TDocumentType
}) => {
	const [open, setOpen] = useState(false)

	const onClose = () => setOpen(false)

	const onAddFile = () => {
		setOpen(true)
	}

	return (
		<>
			<MuiCard
				actions={
					<Button
						label={'Добавить новый документ'}
						icon={'AddIcon'}
						onClick={onAddFile}
					/>
				}
			>
				<ResponsiveGrid container sx={{ alignContent: 'center' }}>
					{documents.map(doc => (
						<ResponsiveGrid key={doc.fileName} item sx={{ flex: undefined }}>
							<File file={doc} />
						</ResponsiveGrid>
					))}
				</ResponsiveGrid>
			</MuiCard>

			<MuiModal
				title={'Добавить новый документ'}
				open={open}
				onClose={onClose}
				isFullScreen={documentType === 'check'}
			>
				<AddFileForm onCloseModal={onClose} documentType={documentType} />
			</MuiModal>
		</>
	)
}

const AddFileForm = ({
	onCloseModal,
	documentType,
}: {
	onCloseModal: () => void
	documentType: TDocumentType
}) => {
	const [scannedData, setScannedData] = useState<string | null>(null)

	const handleScanSuccess = (decodedText: string) => {
		setScannedData(decodedText)
	}

	const handleScanAgain = () => {
		setScannedData(null)
	}

	const handleSave = () => {
		if (scannedData) {
			console.log('Saving data:', scannedData)
			// Here you would typically call a mutation to save the data
		}
		onCloseModal()
	}

	switch (documentType) {
		case 'check': {
			return (
				<QRScanner
					scannedData={scannedData}
					onScanSuccess={handleScanSuccess}
					onScanAgain={handleScanAgain}
					onSave={handleSave}
				/>
			)
		}
		case 'waybill':
		case 'invoice': {
			return <>PDF</>
		}
		default: {
			return null
		}
	}
}

const getFileIcon = (type: string) => {
	switch (type) {
		case 'application/pdf':
			return (
				<Avatar>
					<InsertDriveFile />
				</Avatar>
			)
		default:
			return (
				<Avatar>
					<InsertDriveFile />
				</Avatar>
			)
	}
}

const File = ({ file }: { file: IDocument }) => {
	return (
		<ListItemButton
			sx={{
				borderRadius: BORDER_RADIUS,
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				width: '160px',
				minHeight: '160px',
				justifyContent: 'center',
			}}
		>
			<ListItemAvatar sx={{ '&.MuiListItemAvatar-root': { minWidth: 0 } }}>
				{getFileIcon(file.type)}
			</ListItemAvatar>

			<ListItemText
				primary={file.fileName}
				secondary={file.date.toLocaleDateString()}
				sx={{ flex: 0 }}
			/>
		</ListItemButton>
	)
}

const DATA: IDocument[] = [
	{
		fileName: 'check.pdf',
		file: '/Users/darius/Downloads/Check.pdf',
		date: new Date(),
		type: 'application/pdf',
	},
	{
		fileName: 'document-document-document.docx',
		file: '/Users/darius/Downloads/document.docx',
		date: new Date(),
		type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	},
]
