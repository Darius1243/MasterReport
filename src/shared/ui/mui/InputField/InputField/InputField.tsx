import { IBaseInputField } from '@/shared/model/types/IBaseInputField'
import { BaseInputField } from '../BaseInputField'

export const InputField = (props: IBaseInputField) => {
	return <BaseInputField test-type='text' {...props} />
}
