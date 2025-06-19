import { isEmpty } from '@/shared/libs'
import * as constants from '@/shared/model/constants/constants'
import { IFields, TField } from '@/shared/model/types/TypeInputField'
import { ResponsiveGrid } from '../../responsiveGrid'
import { AutocompleteForm } from '../Autocomplete'
import { CheckBoxForm } from '../CheckBox'
import { DatePickerForm, DateTimePickerForm } from '../DatePicker'
import { InputFieldForm, NumberFieldForm } from '../InputField'
import { RadioGroupForm } from '../RadioGroup'

interface IRenderInputFields {
	fields: IFields
	isLoading: boolean
}

export const RenderInputFields = ({
	fields,
	isLoading,
}: IRenderInputFields) => {
	if (isEmpty(fields)) return

	return (
		<ResponsiveGrid container>
			{Object.values(fields).map(field => {
				return (
					<ResponsiveGrid key={field.name} item>
						<Field field={field} isLoading={isLoading} />
					</ResponsiveGrid>
				)
			})}
		</ResponsiveGrid>
	)
}

export const Field = ({
	field,
	isLoading,
}: {
	field: TField
	isLoading: boolean
}) => {
	const Component = componentMap[field.type]

	if (!Component) {
		console.error('Unknown control', field)

		return <>Unknown control</>
	}

	return <Component {...field} isLoading={isLoading} />
}

const componentMap: Record<string, React.ComponentType<any> | string> = {
	[constants.AUTOCOMPLETE_FORM]: AutocompleteForm,
	[constants.STRING_FORM]: InputFieldForm,
	[constants.PHONE_FORM]: InputFieldForm,
	[constants.NUMBER_FORM]: NumberFieldForm,
	[constants.CHECKBOX_FORM]: CheckBoxForm,
	[constants.RADIO_FORM]: RadioGroupForm,
	[constants.DATE_FORM]: DatePickerForm,
	[constants.DATETIME_FORM]: DateTimePickerForm,
}
