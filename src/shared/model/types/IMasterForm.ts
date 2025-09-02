import { IWidget } from './IWidget'
import { TData } from './TData'

type FormData = Record<string, number | string | boolean>

export interface IMasterForm {
	id?: number
	data?: FormData | null
	error: Error | undefined
	refetch?: () => void
	isLoading: boolean
	elements: IWidget
	crud: {
		create: (args: { variables: { data: TData } }) => Promise<any>
		update: (args: { variables: { id: number; data: TData } }) => Promise<any>
	}
	onCloseModal?: () => void
	children?: React.ReactNode
}
