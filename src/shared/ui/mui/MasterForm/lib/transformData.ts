import { TValue } from '@/shared/model/types/TValue'

type FormData = Record<string, number | string | boolean>

export const transformData = (
	formData: FormData,
	entityId?: number
): Record<string, TValue> => {
	const GHOST_FIELD_PREFIX = '_'
	const cleanedData: Record<string, any> = {}

	for (const key in formData) {
		if (Object.prototype.hasOwnProperty.call(formData, key)) {
			if (!key.startsWith(GHOST_FIELD_PREFIX)) {
				cleanedData[key] = formData[key]
			}
		}
	}

	if (entityId != undefined && cleanedData.hasOwnProperty('id')) {
		delete cleanedData.id
	}

	return cleanedData
}
