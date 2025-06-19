import {
	createTheme,
	responsiveFontSizes,
	ThemeOptions,
} from '@mui/material/styles'

const commonTypography: ThemeOptions['typography'] = {
	fontFamily: [
		'Inter',
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
}

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2',
		},
		background: {
			default: '#f5f5f5',
			paper: '#ffffff',
		},
	},
	typography: commonTypography,
})

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff025',
		},
		background: {
			default: '#1a1e27',
			paper: '#242833',
		},
	},
	typography: commonTypography,
})

export const finalLightTheme = responsiveFontSizes(lightTheme)
export const finalDarkTheme = responsiveFontSizes(darkTheme)
