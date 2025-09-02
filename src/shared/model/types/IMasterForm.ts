import { IWidget } from './IWidget'

export interface IMasterForm<TCreate, TUpdate> {
	isLoading: boolean
	elements: IWidget
	crud: {
		create: (args: { variables: { data: TCreate } }) => Promise<any>
		update: (args: { variables: { id: number; data: TUpdate } }) => Promise<any>
	}
	id?: number
	data?: TCreate | TUpdate | null
	error?: Error | undefined
	refetch?: () => void
	onCloseModal?: () => void
	children?: React.ReactNode
}
