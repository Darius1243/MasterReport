export interface IAppStore {
	currentTheme: 'light' | 'dark'
	localTimeZone: string

	setCurrentTheme: (theme: 'light' | 'dark') => void
}
