import { ApolloProvider } from '@apollo/client/react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Suspense, useMemo } from 'react'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { useShallow } from 'zustand/shallow'
import { apolloClient } from './apolloClient'
import './i18n'
import './index.css'
import { router } from './router'
import { useAppStore } from './shared/model/store'
import { ErrorBoundaryForComponent } from './shared/ui/boundary'
import { Fallback } from './shared/ui/fallback'
import { finalDarkTheme, finalLightTheme } from './theme'

export const App = () => {
	const currentThemeMode = useAppStore(useShallow(state => state.currentTheme))

	const theme = useMemo(
		() => (currentThemeMode === 'light' ? finalLightTheme : finalDarkTheme),
		[currentThemeMode]
	)

	return (
		<ThemeProvider theme={theme}>
			<ApolloProvider client={apolloClient}>
				<CssBaseline />

				<ErrorBoundaryForComponent>
					<Suspense fallback={<Fallback />}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<RouterProvider router={router} />

							<ToastContainer />
						</LocalizationProvider>
					</Suspense>
				</ErrorBoundaryForComponent>
			</ApolloProvider>
		</ThemeProvider>
	)
}
