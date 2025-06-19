import { useCallback } from 'react'

export const useYupValidationResolver = validationSchema =>
	useCallback(
		async data => {
			if (typeof data !== 'object' || Array.isArray(data)) {
				console.error('Data must be an object', data)

				return {
					values: {},
					errors: {
						error: {
							type: 'validation',
							message: 'Data must be an object',
						},
					},
				}
			}

			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false,
				})

				return {
					values,
					errors: {},
				}
			} catch (errors) {
				// console.error('Validation errors', errors)

				return {
					values: {},
					errors: errors?.inner?.reduce(
						(allErrors, currentError) => ({
							...allErrors,
							[currentError.path || 'error']: {
								type: currentError.type ?? 'validation',
								message: currentError.message,
							},
						}),
						{},
					),
				}
			}
		},
		[validationSchema],
	)
