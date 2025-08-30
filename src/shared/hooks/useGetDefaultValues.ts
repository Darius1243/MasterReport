import { IFields } from '@/shared/model/types/TypeInputField'
import { DATE, DATE_FORM, DATETIME } from '@/shared/model/constants'

export const useGetDefaultValues = (fields: IFields, item?: any) => {
	if (item) return item

	const defaultValues: { [key: string]: any } = {}

	for (const key in fields) {
		const field = fields[key]
		if (field.defaultValue) {
			defaultValues[key] = field.defaultValue
		} else {
			switch (field.type) {
				case DATE:
				case DATE_FORM:
				case DATETIME:
					defaultValues[key] = new Date()
					break
			}
		}
	}

	return defaultValues
}