export const getErrorMessage = (error: any): string | undefined => {
	if (!error) return undefined
	if (typeof error.message === 'string') return error.message
	if (typeof error === 'string') return error

	return undefined
}
