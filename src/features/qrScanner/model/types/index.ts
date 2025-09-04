export type QRScannerProps = {
	onScanSuccess: (decodedText: string) => void
	fps?: number
	scannedData: string | null
	onScanAgain: () => void
	onSave: () => void
}
