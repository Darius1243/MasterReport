import { useFormContext } from 'react-hook-form'
import { HiddenField } from './HiddenField'

export const HiddenFieldForm = ({ name, defaultValue, ...props }) => {
	const { register } = useFormContext()

	return <HiddenField name={name} {...register(name)} {...props} />
}
