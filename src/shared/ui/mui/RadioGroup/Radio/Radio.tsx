import { BaseRadio } from '../BaseRadio'

export const Radio = ({ checked, label = undefined, isReadOnly = false, error = undefined, ...props }) => {
	return <BaseRadio checked={checked} label={label} isReadOnly={isReadOnly} error={error} {...props} />
}
