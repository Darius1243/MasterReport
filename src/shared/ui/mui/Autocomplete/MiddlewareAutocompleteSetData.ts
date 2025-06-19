// import { sortData } from '@/helper'
// import { replaceFields } from '@/helper/replaceFields'
// import { IIds } from '@/interfaces'
// import { IAutocompleteFilterCondition, IAutocompleteOptions } from '@/interfaces/IAutocomplete'
// import { isEmpty, isObject } from '@/utils'
// import * as Constants from '@constants/Constants'
// import { MRT_RowData } from 'material-react-table'
// import { Row } from 'node_modules/@tanstack/table-core/build/lib/types'

// export function MiddlewareAutocompleteSetData({
// 	data,
// 	additionalOptions,
// 	row = undefined,
// 	rows = undefined,
// 	ids = undefined,
// 	dataConversionMiddleware = undefined,
// 	valueKey,
// 	filter = undefined,
// 	replaceField = undefined,
// 	uniqueOptionsBy = undefined,
// 	sortBy = undefined,
// 	filterBy = undefined,
// 	filterByDepended = undefined,
// 	excludeSelectedItems = false,
// }: {
// 	data: unknown[]
// 	additionalOptions?: Record<string, unknown>[]
// 	row?: Row<MRT_RowData>
// 	rows?: Row<MRT_RowData>[]
// 	ids?: IIds
// 	dataConversionMiddleware?: (data: any[]) => any[]
// 	valueKey?: IAutocompleteOptions['valueKey']
// 	filter?: IAutocompleteOptions['filter']
// 	replaceField?: IAutocompleteOptions['replaceField']
// 	uniqueOptionsBy?: IAutocompleteOptions['uniqueOptionsBy']
// 	sortBy?: IAutocompleteOptions['sortBy']
// 	filterBy?: IAutocompleteOptions['filterBy']
// 	filterByDepended?: IAutocompleteOptions['filterByDepended']
// 	excludeSelectedItems?: IAutocompleteOptions['excludeSelectedItems']
// }) {
// 	if (isEmpty(data)) return []
// 	if (!valueKey) return data

// 	const newData = replaceFields(data, replaceField)

// 	let result = newData
// 		.map((item, keyId) => (!isObject(item) ? { [valueKey]: item, keyId } : { ...item, keyId }))
// 		.filter(item => item[valueKey] !== undefined && item[valueKey] !== null)

// 	result =
// 		!isEmpty(ids) && !isEmpty(filterBy)
// 			? result?.filter(item => {
// 					return filterBy?.every(f => {
// 						return item[f] === ids[f]
// 					})
// 				})
// 			: result

// 	result = !isEmpty(filterByDepended)
// 		? result?.filter(item => {
// 				return filterByDepended?.every(f => {
// 					return item[f] === row?.original[f]
// 				})
// 			})
// 		: result

// 	if (filter) {
// 		result = applyFilter(result, filter)
// 	}

// 	if (uniqueOptionsBy) {
// 		result = getUniqueByKeys({ array: result, keys: uniqueOptionsBy })
// 	}

// 	if (dataConversionMiddleware) {
// 		result = dataConversionMiddleware(result)
// 	}

// 	if (sortBy) {
// 		result = sortData(result, sortBy)
// 	}

// 	result = additionalOptions ? [...additionalOptions, ...result] : result

// 	return result
// }

// function getUniqueByKeys({ array, keys }) {
// 	const keySet = new Set()

// 	return array.filter(item => {
// 		const keyString = keys.map(key => item[key]).join('|')

// 		if (!keySet.has(keyString)) {
// 			keySet.add(keyString)

// 			return true
// 		}

// 		return false
// 	})
// }

// function applyFilter(data, filter) {
// 	return data.filter(item => {
// 		return filter.every(f => {
// 			switch (f.operator) {
// 				case Constants.OR:
// 					return f.conditions.some(condition => {
// 						return applyCondition(item, condition)
// 					})
// 				case Constants.AND:
// 					throw new Error('AND!!!!!!!!!!!!!!')
// 				case Constants.EQUAL:
// 					return item[f.fieldName] === f.value

// 				default:
// 					return applyCondition(item, f)
// 			}
// 		})
// 	})
// }

// function applyCondition(item: any, condition: IAutocompleteFilterCondition): boolean {
// 	switch (condition.operator) {
// 		case Constants.EQUAL:
// 			return item[condition.fieldName] === condition.value
// 		case Constants.IS_NOT_EQUAL:
// 			return item[condition.fieldName] !== condition.value
// 		case Constants.IS_NULL:
// 			return item[condition.fieldName] === null
// 		case Constants.IS_NOT_NULL:
// 			return item[condition.fieldName] != null
// 		default:
// 			return true
// 	}
// }
