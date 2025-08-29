import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode'
import { useEffect, useRef } from 'react'

const qrcodeRegionId = 'html5qr-code-full-region'

type QRScannerProps = {
	onScanSuccess: (decodedText: string) => void
	fps?: number
	qrbox?: number
}

export const QRScanner = ({
	onScanSuccess,
	fps = 10,
	qrbox = 250,
}: QRScannerProps) => {
	const scannerRef = useRef<Html5Qrcode | null>(null)

	useEffect(() => {
		const scanner = new Html5Qrcode(qrcodeRegionId)
		scannerRef.current = scanner

		const startScanning = () => {
			scanner
				.start(
					{ facingMode: 'environment' },
					{ fps, qrbox },
					decodedText => {
						// Вызываем колбэк при успешном сканировании
						onScanSuccess(decodedText)
					},
					errorMessage => {
						// Можно игнорировать ошибки
					}
				)
				.catch(err => {
					console.error('Failed to start scanner', err)
				})
		}

		Html5Qrcode.getCameras()
			.then(cameras => {
				if (cameras && cameras.length) {
					startScanning()
				}
			})
			.catch(err => {
				console.error('No cameras found', err)
			})

		return () => {
			if (
				scannerRef.current &&
				scannerRef.current.getState() === Html5QrcodeScannerState.SCANNING
			) {
				scannerRef.current
					.stop()
					.catch(err => {
						console.error('Failed to stop scanner', err)
					})
					.finally(() => {
						scannerRef.current?.clear()
					})
			}
		}
	}, [fps, qrbox, onScanSuccess])

	return <div id={qrcodeRegionId} style={{ width: '300px' }} />
}
