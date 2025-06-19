import { IWidget } from '@/shared/model/types'
import { IFields } from '@/shared/model/types/TypeInputField'
import { generateValidations } from '@/shared/ui/mui/MasterForm/generateValidations'
import { isEmpty } from '../isEmpty'

export const processWidgetConstructor = (widget: IWidget) => {
	const { fields, ...rest } = widget

	return {
		fields,
		defaultValues: getDefaultValues(fields),
		validationSchema: generateValidations(fields),
		...rest,
	}
}

const getDefaultValues = (fields: IFields) =>
	Object.values(fields).reduce((acc, { name }) => {
		const defaultValue = fields[name]?.defaultValue

		if (!isEmpty(defaultValue)) acc[name] = defaultValue

		return acc
	}, {})
