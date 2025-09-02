import { TData } from './TData'

export interface IOnSubmit {
	id: number | undefined
	data: TData
	create: (args: { variables: { data: any } }) => Promise<any>
	update: (args: { variables: { id: number; data: any } }) => Promise<any>
	reset: () => void
	refetch?: () => void
	onCloseModal?: () => void
}
