import { gql } from '@apollo/client'

export const GET_ALL_DOCUMENT_TYPES = gql`
	query GetAllDocumentTypes {
		documentTypes {
			id
			name
		}
	}
`

export const GET_DOCUMENT_TYPE_BY_ID = gql`
	query GetDocumentTypeById($id: Int!) {
		documentType(id: $id) {
			id
			name
		}
	}
`

export const CREATE_DOCUMENT_TYPE = gql`
	mutation CreateDocumentType($data: DocumentTypeCreateInput!) {
		createDocumentType(data: $data) {
			name
		}
	}
`

export const UPDATE_DOCUMENT_TYPE = gql`
	mutation UpdateDocumentType($id: Int!, $data: DocumentTypeUpdateSimpleInput!) {
		updateDocumentType(id: $id, data: $data) {
			id
			name
		}
	}
`

export const DELETE_DOCUMENT_TYPE = gql`
	mutation DeleteDocumentType($id: Int!) {
		deleteDocumentType(id: $id)
	}
`
