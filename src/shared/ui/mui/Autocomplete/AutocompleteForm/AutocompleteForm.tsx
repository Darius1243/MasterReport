import { IAutocompleteOptions } from '@/shared/model/types'
import { Controller, useFormContext } from 'react-hook-form'
import { Autocomplete } from '../Autocomplete/Autocomplete'

export const AutocompleteForm = ({
	name,
	label,
	options,
	valueKey,
	valueId,
	labelKeys,
	isFreeSolo = false,
	isLoading = false,
	isReadOnly = false,
	isError = false,
	refetch,
	highlightOptions,
	optionsDependBy,
	onChange = undefined,
	...props
}: IAutocompleteOptions) => {
	const { setValue } = useFormContext()

	return (
		<Controller
			name={name}
			defaultValue={null}
			render={({
				field: { name, ref, value, onChange: formOnChange, onBlur },
				fieldState: { error },
			}) => (
				<Autocomplete
					inputRef={ref}
					name={name}
					label={label}
					options={options}
					valueKey={valueKey}
					valueId={valueId}
					labelKeys={labelKeys}
					isFreeSolo={isFreeSolo}
					isLoading={isLoading}
					isReadOnly={isReadOnly}
					isError={isError}
					refetch={refetch}
					highlightOptions={highlightOptions}
					error={error}
					onBlur={onBlur}
					value={value ?? null}
					onChange={(value, withFields) => {
						formOnChange(value)
						onChange?.(value)

						if (withFields) {
							Object.keys(withFields).forEach(key => {
								setValue(key, withFields[key])
							})
						}
					}}
					{...props}
				/>
			)}
		/>
	)
}
