import { isEmpty, toNumber } from '@/shared/libs'
import {
	AUTOCOMPLETE,
	AUTOCOMPLETE_FORM,
	AUTOCOMPLETE_MRTABLE,
	DATE,
	DATE_FORM,
	DATETIME,
	NUMBER,
	NUMBER_FORM,
	PHONE,
	PHONE_FORM,
	STRING,
	STRING_FORM,
	TIME,
	VALIDATION_MESSAGES,
} from '@/shared/model/constants'
import { IFields } from '@/shared/model/types/TypeInputField'
import * as Yup from 'yup'

export function generateValidations(fields: IFields) {
	const validations: {
		[key: string]:
			| Yup.StringSchema
			| Yup.NumberSchema
			| Yup.DateSchema
			| Yup.MixedSchema
	} = {}

	if (!fields) return undefined

	for (const field of Object.values(fields)) {
		switch (field.type) {
			case AUTOCOMPLETE:
			case AUTOCOMPLETE_FORM:
			case AUTOCOMPLETE_MRTABLE: {
				if (field.required) {
					validations[field.name] = Yup.number().typeError(
						VALIDATION_MESSAGES.REQUIRED
					)
				}

				break
			}
			case STRING:
			case STRING_FORM: {
				if (field.required) {
					validations[field.name] = Yup.string().required(
						VALIDATION_MESSAGES.REQUIRED
					)
				}

				break
			}
			case NUMBER:
			case NUMBER_FORM: {
				validations[field.name] = Yup.number()
					.transform(value => {
						if (typeof value === 'string') return toNumber(value)
						else if (isEmpty(value)) return undefined

						return value
					})
					.test('is-number', VALIDATION_MESSAGES.INVALID_NUMBER, value => {
						return typeof value !== 'string'
					})

				if (field.required) {
					validations[field.name] = validations[field.name].required(
						VALIDATION_MESSAGES.REQUIRED
					)
				}

				break
			}
			case TIME:
			case DATE:
			case DATE_FORM:
			case DATETIME: {
				let schema = Yup.date().typeError(VALIDATION_MESSAGES.INVALID_DATE)
				if (field.required) {
					schema = schema.required(VALIDATION_MESSAGES.REQUIRED)
				}
				validations[field.name] = schema
				break
			}
			case PHONE:
			case PHONE_FORM: {
				validations[field.name] = Yup.string().matches(
					/^[+]?[0-9]{10,14}$/,
					VALIDATION_MESSAGES.INVALID_PHONE
				)

				if (field.required) {
					validations[field.name] = validations[field.name].required(
						VALIDATION_MESSAGES.REQUIRED
					)
				}
				break
			}
			default: {
				break
			}
		}
	}

	return Yup.object().shape(validations)
}
