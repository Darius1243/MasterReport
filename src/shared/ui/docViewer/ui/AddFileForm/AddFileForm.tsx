import { QRScanner } from '@features/qrScanner/ui'
import { UploadFile } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { IDocument } from '../../model'
import { useFileDrop } from '../../model/hooks/useFileDrop'

export const AddFileForm = ({
	onCloseModal,
	formType,
	onAddDocument,
}: {
	onCloseModal: () => void
	formType: 'qr' | 'file' | null
	onAddDocument: (
		doc: Omit<IDocument, 'date' | 'type' | 'file'> & { file: File | string }
	) => void
}) => {
	const theme = useTheme()
	const [scannedData, setScannedData] = useState<string | null>(null)
	const [droppedFiles, setDroppedFiles] = useState<File[]>([])
	const dropRef = useRef<HTMLDivElement>(null)
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFilesDrop = (files: File[]) => {
		setDroppedFiles(files)
	}

	const { isOver, addEventListeners, removeEventListeners } =
		useFileDrop(handleFilesDrop)

	useEffect(() => {
		const currentRef = dropRef.current
		if (currentRef) {
			addEventListeners(currentRef)
		}
		return () => {
			if (currentRef) {
				removeEventListeners(currentRef)
			}
		}
	}, [addEventListeners, removeEventListeners])

	const handleScanSuccess = (decodedText: string) => {
		setScannedData(decodedText)
	}

	const handleScanAgain = () => {
		setScannedData(null)
	}

	const handleSave = () => {
		if (scannedData) {
			onAddDocument({ fileName: 'scan.txt', file: scannedData })
		}
		if (droppedFiles.length > 0) {
			droppedFiles.forEach(file => {
				onAddDocument({ fileName: file.name, file: file })
			})
		}
		onCloseModal()
	}

	const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setDroppedFiles(Array.from(event.target.files))
		}
	}

	const handleDropzoneClick = () => {
		fileInputRef.current?.click()
	}

	if (formType === 'qr') {
		return (
			<QRScanner
				scannedData={scannedData}
				onScanSuccess={handleScanSuccess}
				onScanAgain={handleScanAgain}
				onSave={handleSave}
			/>
		)
	}

	if (formType === 'file') {
		return (
			<Stack spacing={2} sx={{ padding: '1rem' }}>
				<Box
					ref={dropRef}
					onClick={handleDropzoneClick}
					sx={{
						border: `2px dashed ${
							isOver ? theme.palette.primary.main : theme.palette.divider
						}`,
						borderRadius: '8px',
						padding: '2rem',
						textAlign: 'center',
						backgroundColor: isOver
							? theme.palette.action.hover
							: theme.palette.background.paper,
						cursor: 'pointer',
						transition: 'all 0.3s ease-in-out',
						'&:hover': {
							borderColor: theme.palette.primary.main,
							boxShadow: `0 0 0 3px ${theme.palette.primary.light}20`,
						},
					}}
				>
					<input
						type='file'
						ref={fileInputRef}
						onChange={handleFileInputChange}
						style={{ display: 'none' }}
						multiple // Allow multiple file selection
					/>
					<UploadFile
						sx={{ fontSize: 48, color: theme.palette.text.secondary }}
					/>
					<Typography variant='h6' color='text.secondary'>
						Перетащите файлы сюда
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						или нажмите, чтобы выбрать
					</Typography>
				</Box>
				{droppedFiles.length > 0 && (
					<Box>
						<Typography variant='subtitle1'>Выбранные файлы:</Typography>
						<ul>
							{droppedFiles.map(file => (
								<li key={file.name}>{file.name}</li>
							))}
						</ul>
					</Box>
				)}
				<Button
					onClick={handleSave}
					disabled={droppedFiles.length === 0}
					variant='contained'
				>
					Сохранить
				</Button>
			</Stack>
		)
	}

	return null
}
