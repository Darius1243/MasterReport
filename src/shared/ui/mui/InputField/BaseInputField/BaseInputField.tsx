import { IBaseInputField } from '@/shared/model/types/IBaseInputField'
import { TextField } from '@mui/material'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ControlLoader } from '../../ControlLoader'
import { InputFieldProps } from '../InputFieldProps'

export const BaseInputField = forwardRef(
	(
		{
			label,
			helperText = '',
			isLoading = false,
			isReadOnly = false,
			isNumber = false,
			allowNegative = true,
			decimalScale = undefined,
			isCoordinates = false,
			adornment = undefined,
			error = undefined,
			maskOptions = undefined,
			maxLength = undefined,
			...props
		}: IBaseInputField,
		ref
	) => {
		const { t } = useTranslation()
		const _helperText =
			helperText || (error ? t(error?.message?.toString()) : null)

		const testType = getTestType({ props })

		return (
			<ControlLoader isLoading={isLoading}>
				<TextField
					test-type={testType}
					inputRef={ref}
					label={t(label)}
					size={'medium'}
					fullWidth
					error={!!error}
					helperText={_helperText}
					slotProps={{
						input: InputFieldProps({
							adornment,
							allowNegative,
							decimalScale,
							isReadOnly,
							isNumber,
							isCoordinates,
							maskOptions,
							max: maxLength,
						}),
						htmlInput: { maxLength },
						inputLabel: { shrink: true },
					}}
					{...props}
				/>
			</ControlLoader>
		)
	}
)

function getTestType({ props }: { props: any }) {
	const { isNumber, allowNegative, testType } = props

	if (testType) {
		delete props.testType
		return testType
	} else if (isNumber && allowNegative) {
		return 'numberPositive'
	} else if (isNumber && !allowNegative) {
		return 'number'
	} else {
		return 'text'
	}
}
