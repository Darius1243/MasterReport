import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { IAppStore } from '../types/IAppStore'

export const useAppStore = create<IAppStore>()(
	devtools(
		immer(set => ({
			currentTheme:
				(sessionStorage.getItem('currentTheme') as 'light' | 'dark') || 'dark',
			localTimeZone: 'Europe/Moscow',

			setCurrentTheme: theme => {
				set(() => {
					sessionStorage.setItem('currentTheme', theme)
					document.documentElement.setAttribute('data-theme', theme)
					document.body.className = theme
				})

				set(state => {
					state.currentTheme = theme
				})
			},
		}))
	)
)
