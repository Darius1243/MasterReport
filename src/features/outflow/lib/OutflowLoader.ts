import { apolloClient } from '@/apolloClient'
import {
	GetAllFacilitiesDocument,
	GetAllPersonsDocument,
} from '@/generated/graphql'
import { widgetConstructorInLoader } from '@/shared/libs/widgetConstructor'
import { OutflowElements } from '@/shared/model/constants'
import { IWidget } from '@/shared/model/types'

export async function OutflowLoader() {
	try {
		const {
			data: { persons },
		} = await apolloClient.query({ query: GetAllPersonsDocument })

		const {
			data: { facilities },
		} = await apolloClient.query({ query: GetAllFacilitiesDocument })

		const newWidget: IWidget = {
			...OutflowElements,
			fields: {
				...OutflowElements.fields,
				person: { ...OutflowElements.fields.person, options: persons },
				facility: { ...OutflowElements.fields.facility, options: facilities },
			},
		}

		return widgetConstructorInLoader(newWidget)
	} catch (error) {
		console.error('Error loading persons in OutflowLoader:', error)
	}

	return widgetConstructorInLoader(OutflowElements)
}
