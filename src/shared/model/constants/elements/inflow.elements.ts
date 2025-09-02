import {
	AMOUNT_FIELD,
	DATE_FIELD,
	FACILITY_FIELD,
	JOB_FIELD,
	PERSON_FIELD,
} from '@/shared/common'
import { IWidget } from '../../types'

export const InflowElements: IWidget = {
	fields: {
		person: { ...PERSON_FIELD },
		facility: { ...FACILITY_FIELD },
		job: { ...JOB_FIELD },
		amount: { ...AMOUNT_FIELD },
		date: { ...DATE_FIELD },
	},
}
