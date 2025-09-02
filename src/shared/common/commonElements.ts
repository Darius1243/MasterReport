import { TField } from '../model/types/TypeInputField'

export const PERSON_FIELD: TField = {
	name: 'person',
	label: 'Лицо',
	type: 'autocomplete-form',
	valueKey: 'id',
	labelKeys: { rootLabel: 'name' },
	required: true,
}

export const FACILITY_FIELD: TField = {
	name: 'facility',
	label: 'Объект',
	type: 'autocomplete-form',
	valueKey: 'id',
	labelKeys: { rootLabel: 'name' },
	required: true,
}

export const AMOUNT_FIELD: TField = {
	name: 'amount',
	label: 'Сумма',
	type: 'number-form',
	adornment: '₽',
	required: true,
}

export const DATE_FIELD: TField = {
	name: 'date',
	label: 'Дата',
	type: 'date-form',
	required: true,
}

export const JOB_FIELD: TField = {
	name: 'job',
	label: 'Вид работы',
	type: 'autocomplete-form',
	valueKey: 'id',
	labelKeys: { rootLabel: 'name' },
}
