import { IWidget } from '@/shared/model/types'
import { getElements } from './getElements'

export function widgetConstructorInLoader(widget: IWidget) {
	try {
		return getElements(widget)
	} catch (error) {
		console.error(error)

		throw error
	}
}
