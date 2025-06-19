import { IBaseButtonProps } from '@/shared/model/types/IBaseButtonProps'
import { BaseButton } from './BaseButton'

export const Button = (props: IBaseButtonProps) => {
	return <BaseButton {...props} />
}
