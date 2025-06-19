import { apolloClient } from '@/apolloClient'
import {
	GetAllFacilitiesDocument,
	GetAllJobsDocument,
	GetAllPersonsDocument,
} from '@/generated/graphql'
import { widgetConstructorInLoader } from '@/shared/libs/widgetConstructor'
import { InflowElements } from '@/shared/model/constants'
import { IWidget } from '@/shared/model/types'

export async function InflowLoader() {
	try {
		const {
			data: { persons },
		} = await apolloClient.query({ query: GetAllPersonsDocument })

		const {
			data: { jobs },
		} = await apolloClient.query({ query: GetAllJobsDocument })

		const {
			data: { facilities },
		} = await apolloClient.query({ query: GetAllFacilitiesDocument })

		const newWidget: IWidget = {
			...InflowElements,
			fields: {
				...InflowElements.fields,
				person: { ...InflowElements.fields.person, options: persons },
				job: { ...InflowElements.fields.job, options: jobs },
				facility: { ...InflowElements.fields.facility, options: facilities },
			},
		}

		return widgetConstructorInLoader(newWidget)
	} catch (error) {
		console.error('Error loading persons in InflowLoader:', error)
	}

	return widgetConstructorInLoader(InflowElements)
}
