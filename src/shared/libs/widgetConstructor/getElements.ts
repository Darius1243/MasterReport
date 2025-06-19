import { IWidget } from '@/shared/model/types'
import { processWidgetConstructor } from './processWidgetConstructor'

export function getElements(widget: IWidget): IWidget {
	return processWidgetConstructor(widget)
}
