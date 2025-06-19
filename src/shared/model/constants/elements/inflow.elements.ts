import { IWidget } from '../../types'

export const InflowElements: IWidget = {
	fields: {
		person: {
			name: 'person',
			label: 'Лицо',
			type: 'autocomplete-form',
			valueKey: 'id',
			labelKeys: { rootLabel: 'name' },
			required: true,
		},
		facility: {
			name: 'facility',
			label: 'Объект',
			type: 'autocomplete-form',
			valueKey: 'id',
			labelKeys: { rootLabel: 'name' },
			required: true,
		},
		job: {
			name: 'job',
			label: 'Вид работы',
			type: 'autocomplete-form',
			valueKey: 'id',
			labelKeys: { rootLabel: 'name' },
			required: true,
		},
		amount: {
			name: 'amount',
			label: 'Сумма',
			type: 'number-form',
			adornment: '₽',
			required: true,
		},
		date: {
			name: 'date',
			label: 'Дата',
			type: 'date-form',
			required: true,
		},
	},
}
