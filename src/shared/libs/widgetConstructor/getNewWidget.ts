import { getNewBlocks } from './getNewBlocks'

export function getNewWidget(widget: any, widgetsSchema: any) {
	return {
		...widget,
		blocks: getNewBlocks(widget, widgetsSchema),
	}
}
