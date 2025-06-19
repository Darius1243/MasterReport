import { IIconButton } from '@/shared/model/types/IIconButton'
import { BaseIconButton } from '../BaseIconButton'

export const IconButton = (props: IIconButton) => {
	return <BaseIconButton {...props} />
}
