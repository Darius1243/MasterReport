import { apolloClient } from '@/apolloClient'
import { GET_ALL_DOCUMENT_TYPES } from '@/entities/user/api/documentTypeQueries'
import {
	GetAllFacilitiesDocument,
	GetAllPersonsDocument,
} from '@/generated/graphql'
import { widgetConstructorInLoader } from '@/shared/libs/widgetConstructor'
import { OutflowElements } from '@/shared/model/constants'
import { IWidget } from '@/shared/model/types'

export async function OutflowLoader() {
	try {
		const [personsResult, facilitiesResult, documentTypesResult] = await Promise.all([
			apolloClient.query({ query: GetAllPersonsDocument }),
			apolloClient.query({ query: GetAllFacilitiesDocument }),
			apolloClient.query({ query: GET_ALL_DOCUMENT_TYPES }),
		])

		const newWidget: IWidget = {
			...OutflowElements,
			fields: {
				...OutflowElements.fields,
				person: { ...OutflowElements.fields.person, options: personsResult.data.persons },
				facility: { ...OutflowElements.fields.facility, options: facilitiesResult.data.facilities },
				documentType: {
					...OutflowElements.fields.documentType,
					options: documentTypesResult.data.documentTypes,
				},
			},
		}

		return widgetConstructorInLoader(newWidget)
	} catch (error) {
		console.error('Error loading data in OutflowLoader:', error)
	}

	return widgetConstructorInLoader(OutflowElements)
}