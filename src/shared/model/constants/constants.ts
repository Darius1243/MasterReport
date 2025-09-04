export const BORDER_RADIUS = '1rem'
export const LOADING_DELAY = 300

export const QR_CODE_REGION_ID = 'html5qr-code-full-region'

export const STRING = 'string'
export const NUMBER = 'number'
export const PHONE = 'phone'
export const DATE = 'date'
export const TIME = 'time'
export const DATETIME = 'datetime'
export const CHECKBOX = 'checkbox'
export const RADIO = 'radio'
export const HIDDEN = 'hidden'
export const COLOR = 'color'
export const HIDDEN_FORM = 'hidden-form'
export const STRING_FORM = 'string-form'
export const NUMBER_FORM = 'number-form'
export const PHONE_FORM = 'phone-form'
export const AUTOCOMPLETE = 'autocomplete'
export const AUTOCOMPLETE_FORM = 'autocomplete-form'
export const AUTOCOMPLETE_FORM_WITH_QUERY = 'autocomplete-form-with-query'
export const AUTOCOMPLETE_MRTABLE = 'autocomplete-mrtable'
export const AUTOCOMPLETE_WITH_QUERY = 'autocomplete-with-query'
export const DATE_FORM = 'date-form'
export const TIME_FORM = 'time-form'
export const DATETIME_FORM = 'datetime-form'
export const CHECKBOX_FORM = 'checkbox-form'
export const RADIO_FORM = 'radio-form'
export const DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss'
export const QR_SCANNER = 'qr-scanner'
export const QR_SCANNER_FORM = 'qr-scanner-form'

export const VALIDATION_MESSAGES = {
	REQUIRED: 'Поле обязательно для заполнения',
	INVALID_PHONE: 'Неверный формат телефона',
	INVALID_COORDINATES: 'Неверный формат координат',
	INVALID_DATE: 'Неверный формат даты',
	INVALID_NUMBER: 'Неверный формат числа',
} as const

export const NAV_MENU_ITEMS = [
	{ primary: 'home', to: '/', icon: 'HomeIcon' },
	{ primary: 'inflow', to: '/inflow', icon: 'InflowIcon' },
	{ primary: 'outflow', to: '/outflow', icon: 'OutflowIcon' },
	{ primary: 'settings', to: '/settings', icon: 'SettingsIcon' },
] as const

export const DOCUMENT_TYPES = {
	CHECK: 'check',
	NO_CHECK: 'noCheck',
	INVOICE: 'invoice',
	WAYBILL: 'waybill',
} as const

export type TDocumentType = (typeof DOCUMENT_TYPES)[keyof typeof DOCUMENT_TYPES]
