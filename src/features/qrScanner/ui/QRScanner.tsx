import { useQRScanner } from '../model/hooks'
import { QRScannerProps } from '../model/types'
import './QRScanner.css'
import { ScanResult } from './ScanResult'
import { ScanningView } from './ScanningView'

export const QRScanner = ({
	onScanSuccess,
	fps,
	scannedData,
	onScanAgain,
	onSave,
}: QRScannerProps) => {
	const { handleFileChange } = useQRScanner({ onScanSuccess, fps, scannedData })

	if (scannedData) {
		return (
			<ScanResult
				scannedData={scannedData}
				onSave={onSave}
				onScanAgain={onScanAgain}
			/>
		)
	}

	return <ScanningView onFileChange={handleFileChange} />
}
