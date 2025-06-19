import { isEmpty } from '../isEmpty'
import { processWidgetConstructor } from './processWidgetConstructor'

export function getNewBlocks(widget: any, widgetsSchema: any) {
	const newBlocks = widget.blocks.map(block => {
		const newAdditionalFields = {}

		Object.entries(
			block.additionalFields ?? block.tabsCollection ?? {}
		).forEach(([key, value]) => {
			if ('tabs' in value) {
				newAdditionalFields[key] = {
					...newAdditionalFields[key],
					tabs: value.tabs
						.map(tab => {
							const widget = widgetsSchema.find(
								widget => widget.widgetName === tab.name
							)
							if (!widget) return null

							return { ...widget, ...tab }
						})
						.filter(Boolean)
						.map(widget => {
							const newWidget = {
								...widget,
								blocks: getNewBlocks(widget, widgetsSchema),
							}

							return processWidgetConstructor({ widget: newWidget })
						})
						.filter(Boolean),
				}
			}

			if ('elements' in value) {
				const widget = widgetsSchema.find(
					widget => widget.widgetName === value.elements.name
				)
				const newWidget = processWidgetConstructor({ widget })

				newAdditionalFields[key] = {
					...newAdditionalFields[key],
					elements: { ...value.elements, ...newWidget },
				}
			}
		})

		return {
			...block,
			additionalFields: isEmpty(newAdditionalFields)
				? null
				: newAdditionalFields,
		}
	})

	return newBlocks
}
