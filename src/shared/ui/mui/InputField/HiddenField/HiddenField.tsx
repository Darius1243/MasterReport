import { forwardRef } from 'react'

export const HiddenField = forwardRef(({ name, isLoading, isReadOnly, ...props }, ref) => {
	return <input ref={ref} type='hidden' name={name} {...props} />
})
