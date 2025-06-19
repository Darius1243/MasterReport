import { TextFieldProps } from '@mui/material'
import { NumericFormatProps } from 'react-number-format'
import {
	HIDDEN,
	HIDDEN_FORM,
	NUMBER,
	NUMBER_FORM,
	PHONE,
	PHONE_FORM,
	STRING,
	STRING_FORM,
	TIME,
} from '../constants'
import { IAutocomplete, IAutocompleteColumn } from './IAutocomplete'
import { IBaseInputField } from './IBaseInputField'
import {
	IDate,
	IDateColumn,
	IDateTime,
	IDateTimeColumn,
	ITime,
} from './IBasePickerProps'

interface ITypeInputField
	extends IBaseInputField,
		Omit<
			TextFieldProps,
			'autoComplete' | 'label' | 'error' | 'helperText' | 'sx' | 'name'
		> {
	name: string
	type:
		| typeof STRING_FORM
		| typeof STRING
		| typeof PHONE
		| typeof NUMBER_FORM
		| typeof NUMBER
		| typeof PHONE_FORM
		| typeof TIME
		| typeof HIDDEN
		| typeof HIDDEN_FORM
	maskOptions?: { mask: string; blocks: { [key: string]: any } }
	visibility?: Record<string, string>
}

interface ITypeNumberField extends ITypeInputField {
	isNumber?: boolean
	classId: number
	measureId: number
	useDatum?: boolean
	multiplier?: number
	offset?: number
	allowNegative?: NumericFormatProps['allowNegative']
	decimalScale?: NumericFormatProps['decimalScale']
	max?: number
	calcFunc?: (
		data: Record<string, any>,
		autocompleteData?: any,
		fromAutocomplete?: any
	) => any
}

export type TFormField =
	| ITypeInputField
	| ITypeNumberField
	| IAutocomplete
	| IDateTime
	| IDate
	| ITime

export type TypeColumn = IAutocompleteColumn | IDateTimeColumn | IDateColumn

export type TField = TFormField | TypeColumn

export type IFields = Record<string, TField>
export type IFieldsColumn = Record<string, TypeColumn>
export type IFieldsAutocomplete = Record<string, IAutocomplete>
