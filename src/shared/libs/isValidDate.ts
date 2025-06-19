import dayjs from 'dayjs'

export function isValidDate(date) {
	return date != null && dayjs(date).isValid()
}
