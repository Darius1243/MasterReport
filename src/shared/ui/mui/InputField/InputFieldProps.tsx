import InputAdornment from '@mui/material/InputAdornment'
import { useTranslation } from 'react-i18next'
import { InputFieldNumericFormat } from './InputFieldNumericFormat'

export const InputFieldProps = ({
	isNumber,
	allowNegative = true,
	isCoordinates = false,
	adornment = undefined,
	isReadOnly = false,
	decimalScale = undefined,
	maskOptions = undefined,
	max = undefined,
}) => {
	const { t } = useTranslation()

	return {
		endAdornment: adornment ? (
			<InputAdornment position='end'>{t(adornment)}</InputAdornment>
		) : undefined,
		readOnly: isReadOnly,
		inputComponent: getInputComponent(isNumber, maskOptions, isCoordinates),
		componentsProps: {
			input: {
				'allow-negative': allowNegative.toString(),
				'decimal-scale': decimalScale,
				'mask-options': maskOptions,
				max,
			},
		},
	}
}

function getInputComponent(
	isNumber: boolean,
	maskOptions: any,
	isCoordinates: boolean
) {
	if (isNumber) {
		return InputFieldNumericFormat
	} else if (isCoordinates) {
		// return InputFieldCoordinates
	} else if (maskOptions) {
		// return InputFieldMask
	} else {
		return undefined
	}
}
