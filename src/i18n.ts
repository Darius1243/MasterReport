import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// debug: process.env.NODE_ENV === 'development',
		fallbackLng: 'en',
		supportedLngs: ['en', 'ru'],
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		detection: {
			order: [
				'querystring',
				'cookie',
				'localStorage',
				'sessionStorage',
				'navigator',
				'htmlTag',
				'path',
				'subdomain',
			],
			lookupQuerystring: 'lng',
			lookupCookie: 'i18next',
			lookupLocalStorage: 'i18nextLng',
			lookupSessionStorage: 'i18nextLng',
			caches: ['localStorage', 'cookie'],
		},
	})

export default i18n
