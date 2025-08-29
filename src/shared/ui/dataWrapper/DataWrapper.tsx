import { isEmpty } from '@/shared/libs'
import { NetworkStatus } from '@apollo/client'
import { NoData } from '../noData'
import { ListSkeleton } from '../skeleton'

interface DataWrapperProps<T> {
	data: T
	loading: boolean
	networkStatus?: NetworkStatus
	customSkeleton?: React.ReactNode
	children: (data: T) => React.ReactNode
}

export function DataWrapper<T>({
	data,
	loading,
	networkStatus,
	customSkeleton,
	children,
}: DataWrapperProps<T>) {
	const isLoading = networkStatus === NetworkStatus.refetch || loading

	if (isLoading) return customSkeleton ?? <ListSkeleton count={3} />
	if (isEmpty(data)) return <NoData />

	return children(data)
}
