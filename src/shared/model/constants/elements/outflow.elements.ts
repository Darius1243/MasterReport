import {
	AMOUNT_FIELD,
	DATE_FIELD,
	FACILITY_FIELD,
	JOB_FIELD,
	PERSON_FIELD,
} from '@/shared/common'
import { IWidget } from '../../types'
import { DOCUMENT_TYPES } from '../constants'

export const OutflowElements: IWidget = {
	fields: {
		person: { ...PERSON_FIELD },
		facility: { ...FACILITY_FIELD },
		amount: { ...AMOUNT_FIELD },
		date: { ...DATE_FIELD },
		job: { ...JOB_FIELD },
		documentType: {
			name: '_documentType',
			label: 'Вид документа',
			type: 'autocomplete-form',
			valueKey: 'id',
			labelKeys: { rootLabel: 'name' },
			required: true,
			options: [
				{ id: 1, name: 'Кассовый чек', code: DOCUMENT_TYPES.CHECK },
				{ id: 2, name: 'Без чека', code: DOCUMENT_TYPES.NO_CHECK },
				{ id: 3, name: 'Счет фактура', code: DOCUMENT_TYPES.INVOICE },
				{ id: 4, name: 'Накладная', code: DOCUMENT_TYPES.WAYBILL },
			],
		},
	},
}
