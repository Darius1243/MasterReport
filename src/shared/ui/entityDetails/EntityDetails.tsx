import { IFields } from '@/shared/model/types/TypeInputField'
import { DeleteButtonWithDialog } from '@/shared/ui'
import { MasterForm } from '@/shared/ui/form'
import { ApolloError } from '@apollo/client'

interface IEntityDetailsProps<
	T,
	CreateArgs = any,
	UpdateArgs = any,
	DeleteArgs = any,
	CreateResult = any,
	UpdateResult = any,
	DeleteResult = any
> {
	onCloseModal?: () => void
	fields: IFields
	error: ApolloError | undefined
	create: (args: CreateArgs) => Promise<CreateResult>
	update: (args: UpdateArgs) => Promise<UpdateResult>
	deleteItem: (args: DeleteArgs) => Promise<DeleteResult>
	isLoading: boolean
	id?: number
	item?: T
	data?: T | null
}

export function EntityDetails<T>({
	id,
	item,
	data,
	error,
	create,
	update,
	deleteItem,
	isLoading,
	onCloseModal,
	fields,
}: IEntityDetailsProps<T>) {
	const _id = item?.id ?? id

	return (
		<MasterForm
			id={_id}
			data={item || data}
			elements={{ fields }}
			crud={{ create, update }}
			error={error}
			isLoading={isLoading}
			onCloseModal={onCloseModal}
		>
			{_id ? (
				<DeleteButtonWithDialog
					action={() => deleteItem({ variables: { id: _id } })}
					disabled={isLoading}
				/>
			) : null}
		</MasterForm>
	)
}
