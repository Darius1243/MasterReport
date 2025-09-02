export interface IOnSubmit<TCreate, TUpdate> {
	id: number | undefined
	data: Record<string, any>
	create: (args: { variables: { data: TCreate } }) => Promise<any>
	update: (args: { variables: { id: number; data: TUpdate } }) => Promise<any>
	reset: () => void
	refetch?: () => void
	onCloseModal?: () => void
}
