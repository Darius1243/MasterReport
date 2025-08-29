import {
	AMOUNT_FIELD,
	DATE_FIELD,
	FACILITY_FIELD,
	PERSON_FIELD,
} from '@/shared/common'
import { IWidget } from '../../types'

export const OutflowElements: IWidget = {
	fields: {
		person: { ...PERSON_FIELD },
		facility: { ...FACILITY_FIELD },
		amount: { ...AMOUNT_FIELD },
		date: { ...DATE_FIELD },
		documentType: {
			name: 'documentType',
			label: 'Вид документа',
			type: 'autocomplete-form',
			valueKey: 'id',
			labelKeys: { rootLabel: 'name' },
			required: true,
		},
	},
}
