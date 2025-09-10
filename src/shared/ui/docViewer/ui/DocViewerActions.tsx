import { Button } from '@/shared/ui/mui/Button'
import Box from '@mui/material/Box'

export const DocViewerActions = ({
	onScanQr,
	onAddFile,
}: {
	onScanQr: () => void
	onAddFile: () => void
}) => {
	return (
		<Box sx={{ display: 'flex', gap: 1 }}>
			<Button
				label={'Сканировать QR-код'}
				icon={'QrCodeScannerIcon'}
				onClick={onScanQr}
				variant={'outlined'}
			/>

			<Button
				label={'Добавить документ'}
				icon={'PostAddOutlinedIcon'}
				onClick={onAddFile}
				variant={'outlined'}
			/>
		</Box>
	)
}
