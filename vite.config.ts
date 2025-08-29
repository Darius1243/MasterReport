import react from '@vitejs/plugin-react'
import type { ServerOptions } from 'https'
import path from 'path'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
	plugins: [react(), mkcert()],
	server: {
		https: {} as ServerOptions,
		host: true,
		port: 5173,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@views': path.resolve(__dirname, './src/views'),
			'@redux': path.resolve(__dirname, './src/redux'),
			'@theme': path.resolve(__dirname, './src/theme'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@services': path.resolve(__dirname, './src/services'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@types': path.resolve(__dirname, './src/types'),
			'@contexts': path.resolve(__dirname, './src/contexts'),
			'@helper': path.resolve(__dirname, './src/helper'),
			'@features': path.resolve(__dirname, './src/features'),
		},
	},
})
