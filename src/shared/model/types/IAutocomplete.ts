import { AutocompleteProps } from '@mui/material'
import {
	AUTOCOMPLETE,
	AUTOCOMPLETE_FORM,
	AUTOCOMPLETE_FORM_WITH_QUERY,
	AUTOCOMPLETE_MRTABLE,
	AUTOCOMPLETE_WITH_QUERY,
} from '../constants'
import { IBaseInputField } from './IBaseInputField'

// export interface IAutocompleteFilterCondition {
// 	fieldName: string
// 	value: TValue
// 	operator: typeof EQUAL | typeof IS_NOT_EQUAL | typeof IS_NULL | typeof IS_NOT_NULL | typeof SKIP | typeof FIRST
// }

// interface IAutocompleteFilter {
// 	fieldName?: string
// 	operator: typeof OR | typeof AND | typeof IS_NULL | typeof IS_NOT_NULL | typeof EQUAL | typeof IS_NOT_EQUAL
// 	value?: TValue
// 	conditions?: IAutocompleteFilterCondition[]
// }

export interface IAutocompleteOptions
	extends Omit<
		AutocompleteProps<any, any, any, any, any>,
		'renderInput' | 'options'
	> {
	uniqueName?: string
	valueKey: string
	labelKeys: { rootLabel: string; keys?: string[] }
	valueId?: string
	options?: AutocompleteProps<any, any, any, any, any>['options']
	// filter?: IAutocompleteFilter[]
	filterBy?: string[]
	filterByDepended?: string[]
	// withFields?: string[] | TypeObjectKeyStringValueString
	// replaceField?: TypeObjectKeyStringValueString
	isFreeSolo?: boolean
	sortBy?: string
	disableControlLoader?: boolean
	uniqueOptionsBy?: string[]
	isSelectOneSingleItem?: boolean
	required?: boolean
	// addNewItemForm?: {
	// 	type: 'form' | 'table'
	// 	// добавляем значения полей из текущей строки автокомплита
	// 	addFieldsToIds?: string[]
	// 	fields: IFields
	// 	crud: ICrud
	// 	blocks?: IBlockForm | IBlockTable
	// }
	excludeSelectedItems?: boolean
	isLoading?: boolean
}

export interface IAutocomplete
	extends IBaseInputField,
		IAutocompleteOptions,
		Omit<
			AutocompleteProps<any, any, any, any, any>,
			'renderInput' | 'options'
		> {
	type:
		| typeof AUTOCOMPLETE_FORM
		| typeof AUTOCOMPLETE
		| typeof AUTOCOMPLETE_WITH_QUERY
		| typeof AUTOCOMPLETE_FORM_WITH_QUERY
		| typeof AUTOCOMPLETE_MRTABLE
}

export interface IAutocompleteColumn
	extends Omit<
		AutocompleteProps<any, any, any, any, any>,
		'renderInput' | 'options' | 'id' | 'size'
	> {
	name: string
	type:
		| typeof AUTOCOMPLETE
		| typeof AUTOCOMPLETE_WITH_QUERY
		| typeof AUTOCOMPLETE_MRTABLE
	autocomplete: IAutocompleteOptions
}
