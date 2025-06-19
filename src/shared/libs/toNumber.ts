import { isEmpty } from './isEmpty'

export function toNumber(value: string | number) {
	if (typeof value === 'number') return value
	else if (typeof value !== 'string') return undefined

	const valueWithoutSpaces = value.replace(/\s/g, '').replace(',', '.')
	const parse = parseFloat(valueWithoutSpaces)
	const floatValue = Number.isNaN(parse) ? null : parse

	return isEmpty(floatValue) ? null : floatValue
}
