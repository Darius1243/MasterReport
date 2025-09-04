import { MuiCard } from '@/shared/ui/mui'
import { Button } from '@/shared/ui/mui/Button'
import { Box, Stack, Typography } from '@mui/material'

type ScanResultProps = {
	scannedData: string
	onSave: () => void
	onScanAgain: () => void
}

export const ScanResult = ({
	scannedData,
	onSave,
	onScanAgain,
}: ScanResultProps) => {
	return (
		<Box sx={{ p: 2, textAlign: 'center' }}>
			<Typography variant="h6" sx={{ mb: 2 }}>
				Результат сканирования
			</Typography>

			<MuiCard>
				<Typography sx={{ p: 2, wordBreak: 'break-all' }}>
					{scannedData}
				</Typography>
			</MuiCard>

			<Stack
				direction="row"
				spacing={2}
				sx={{ mt: 3, justifyContent: 'center' }}
			>
				<Button label={'Сохранить'} onClick={onSave} icon={'SaveIcon'} />
				<Button
					label={'Сканировать заново'}
					onClick={onScanAgain}
					icon={'RefreshIcon'}
				/>
			</Stack>
		</Box>
	)
}
