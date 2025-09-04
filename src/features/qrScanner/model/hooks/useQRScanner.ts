import { isMobile } from '@/features/qrScanner/lib'
import { QR_CODE_REGION_ID } from '@/shared/model/constants'
import { Html5Qrcode, QrcodeSuccessCallback } from 'html5-qrcode'
import { ChangeEvent, useCallback, useEffect, useRef } from 'react'

type UseQRScannerProps = {
	onScanSuccess: (decodedText: string) => void
	fps?: number
	scannedData: string | null
}

export const useQRScanner = ({
	onScanSuccess,
	fps = 10,
	scannedData,
}: UseQRScannerProps) => {
	const scannerRef = useRef<Html5Qrcode | null>(null)

	const startCamera = useCallback(() => {
		if (scannerRef.current && !scannerRef.current.isScanning) {
			const successCallback: QrcodeSuccessCallback = decodedText => {
				onScanSuccess(decodedText)
			}

			scannerRef.current
				.start(
					{ facingMode: 'environment' },
					{
						fps,
						qrbox: (viewfinderWidth, viewfinderHeight) => {
							const smallerEdge = Math.min(viewfinderWidth, viewfinderHeight)
							const percentage = isMobile() ? 0.4 : 0.6
							let size = smallerEdge * percentage

							size = Math.max(150, size)
							size = Math.min(550, size)

							return {
								width: size,
								height: size,
							}
						},
						videoConstraints: {
							width: { ideal: 1920 },
							height: { ideal: 1080 },
							facingMode: 'environment',
						},
					},
					successCallback,
					() => {}
				)
				.catch(err => {
					console.error('Failed to start scanner', err)
				})
		}
	}, [fps, onScanSuccess])

	const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file || !scannerRef.current) {
			return
		}

		const scanner = scannerRef.current
		try {
			if (scanner.isScanning) {
				await scanner.stop()
			}
			const decodedText = await scanner.scanFile(file, false)
			onScanSuccess(decodedText)
		} catch (err) {
			alert(`Не удалось отсканировать QR-код из файла. Ошибка: ${err}`)
			if (!scannedData) {
				startCamera()
			}
		}
	}

	useEffect(() => {
		if (scannedData) return

		scannerRef.current = new Html5Qrcode(QR_CODE_REGION_ID, { verbose: false })

		Html5Qrcode.getCameras()
			.then(cameras => {
				if (cameras && cameras.length) {
					startCamera()
				} else {
					console.error('No cameras found.')
				}
			})
			.catch(err => {
				console.error('Error getting cameras', err)
			})

		return () => {
			if (scannerRef.current?.isScanning) {
				scannerRef.current.stop().catch(err => {
					console.error('Failed to stop scanner on cleanup', err)
				})
			}
		}
	}, [scannedData, startCamera])

	return { handleFileChange }
}
