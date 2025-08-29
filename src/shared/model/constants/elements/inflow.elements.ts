import {
	AMOUNT_FIELD,
	DATE_FIELD,
	FACILITY_FIELD,
	PERSON_FIELD,
} from '@/shared/common'
import { IWidget } from '../../types'

export const InflowElements: IWidget = {
	fields: {
		person: { ...PERSON_FIELD },
		facility: { ...FACILITY_FIELD },
		job: {
			name: 'job',
			label: 'Вид работы',
			type: 'autocomplete-form',
			valueKey: 'id',
			labelKeys: { rootLabel: 'name' },
			required: true,
		},
		amount: { ...AMOUNT_FIELD },
		date: { ...DATE_FIELD },
	},
}
