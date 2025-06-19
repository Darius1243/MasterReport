import { useDelay } from '@/shared/hooks'
import { LOADING_DELAY } from '@/shared/model/constants'
import { Fade, Grow } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import React from 'react'

interface IControlLoaderProps {
	isLoading: boolean
	disableControlLoader?: boolean
	isControlInSkeleton?: boolean
	customSkeleton?: React.ReactNode
	children: React.ReactNode
}

export const ControlLoader = ({
	isLoading,
	customSkeleton = undefined,
	disableControlLoader = false,
	children,
}: IControlLoaderProps) => {
	const loading = useDelay(isLoading, LOADING_DELAY)
	const hiddenChildren = React.cloneElement(children, {
		style: { display: 'none' },
	})

	if (disableControlLoader) return children

	return (
		<>
			{loading ? (
				hiddenChildren
			) : (
				<Fade in={!loading} unmountOnExit timeout={300}>
					{children}
				</Fade>
			)}

			{loading ? (
				<Grow in={loading} unmountOnExit timeout={300}>
					{customSkeleton ? (
						<div>{customSkeleton}</div>
					) : (
						<Skeleton animation={'wave'} width={'100%'}>
							{children}
						</Skeleton>
					)}
				</Grow>
			) : null}
		</>
	)
}
