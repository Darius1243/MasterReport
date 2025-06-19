export function isEmpty(value: any) {
	if (value === 0 || value === false) return false

	return (
		!value ||
		(Array.isArray(value) && value?.length === 0) ||
		(typeof value === 'object' && Object.keys(value)?.length === 0)
	)
}
