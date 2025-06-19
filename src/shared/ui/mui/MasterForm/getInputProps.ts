import { getDateValueVariant } from '@/shared/lib/datePicker'
import { TFormField } from '@/types/TypeInputField'
import {
	COORDINATES_FORM,
	DATE,
	NUMBER,
	PHONE_FORM,
} from '@constants/Constants'
import { getAdornment } from './getAdornment'

export const getInputProps = ({
	item,
	elementsOption,
	isLoading: isLoading,
	isEditable,
	selectedUnitOptions,
}) => {
	const {
		label,
		required,
		isReadOnly,
		enableEditing,
		maxLength,
		name,
		multiline,
		rows,
		children,
		testType,
		maskOptions,
		allowNegative,
		decimalScale,
		maxDate,
		defaultValue,
		type,
	} = item

	return {
		label,
		required,
		isLoading,
		defaultValue,
		children,

		isReadOnly: !isEditable || isReadOnly || !(enableEditing ?? true),
		adornment: getAdornment(item, selectedUnitOptions),
		maxLength: maxLength || elementsOption?.[name]?.maxLength,

		...(testType && { testType }),
		...(multiline && { multiline }),
		...(rows && { rows }),
		...(maskOptions && { maskOptions }),

		...(isNumberField(item) && {
			allowNegative,
			decimalScale,
		}),

		...(isDateField(item) && {
			...(maxDate && { maxDate: getDateValueVariant(maxDate) }),
			...(defaultValue && { defaultValue: getDateValueVariant(defaultValue) }),
		}),

		...(type === PHONE_FORM && { isPhoneNumber: true }),
		...(type === COORDINATES_FORM && { isCoordinates: true }),

		item,
	}
}

function isNumberField(item: TFormField) {
	return item.type?.includes(NUMBER)
}

function isDateField(item: TFormField) {
	return item.type?.includes(DATE)
}
