import dayjs from 'dayjs'
import { useAppStore } from '../model/store'

export function formatDate(date: Date | string) {
	const localTimeZone = useAppStore.getState().localTimeZone
	const dateObj = dayjs.tz(date, 'UTC').tz(localTimeZone)

	if (!dateObj.isValid()) return ''

	return dateObj.format('DD.MM.YYYY')
}
