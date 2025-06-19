import { COORDINATES_FORM } from '@/constants/Constants'
import { convertCoordinatesToDB, convertToDB } from '@/helper'
import { isEmpty, isObject } from '@/utils'
import { getDatumAndUnit } from '@hooks/useGetDatumAndUnit'
import cloneDeep from 'lodash/cloneDeep'

export function transformedFormData({ data, etalonData, dirtyFields, injectionKeys, fields }) {
	const copyEtalonData = isObject(etalonData) && !isEmpty(etalonData) ? cloneDeep(etalonData) : { ...data }

	if (isEmpty(copyEtalonData)) return copyEtalonData

	const { datum, unit } = getDatumAndUnit()

	const filteredDirtyFields = {}
	for (const fieldName in dirtyFields) {
		if (fields[fieldName]?.type !== COORDINATES_FORM) {
			filteredDirtyFields[fieldName] = dirtyFields[fieldName]
		}
	}

	for (const name in filteredDirtyFields) {
		copyEtalonData[name] = convertToDB({ value: data[name], option: fields[name], datum, unit })
	}

	Object.values(fields)
		.filter(field => field.type === COORDINATES_FORM && data[field.name] !== null)
		.forEach(field => {
			copyEtalonData[field.name] = convertCoordinatesToDB(data[field.name])
		})

	const keys = isObject(injectionKeys) && !injectionKeys?._reactName ? injectionKeys : {}

	return { ...copyEtalonData, ...keys }
}
