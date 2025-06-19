import { useAppStore } from '@/shared/model/store'
import { Boundary } from '@/shared/ui/boundary'
import { Fallback } from '@/shared/ui/fallback'
import { InflowLoader } from '@features/inflow/lib'
import { Layout } from '@features/layout/ui'
import dayjs from 'dayjs'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			Component: Layout,
			ErrorBoundary: Boundary,
			hydrateFallbackElement: <Fallback />,
			loader: () => {
				useAppStore.setState({ localTimeZone: dayjs.tz.guess() })
			},
			shouldRevalidate: ({ currentUrl, nextUrl }) =>
				currentUrl.pathname !== nextUrl.pathname,
			children: [
				{
					index: true,
					path: '',
					async lazy() {
						const { HomePage } = await import('../pages/HomePage')
						return { Component: HomePage }
					},
				},
				{
					path: 'inflow',
					loader: InflowLoader,
					async lazy() {
						const { InflowPage } = await import('../pages/InflowPage')
						return { Component: InflowPage }
					},
				},
				{
					path: '*',
					async lazy() {
						const { NoMatchPage } = await import('../pages/NoMatchPage')
						return { Component: NoMatchPage }
					},
				},
				// { path: 'about', Component: About },
			],
		},
	],
	{
		dataStrategy: async ({ matches }) => {
			const results: Record<
				string,
				{ type: 'data' | 'error'; result: unknown }
			> = {}

			for (const match of matches) {
				try {
					const { type, result } = await match.resolve()

					if (type === 'error') throw result

					results[match.route.id] = { type: 'data', result: { type, result } }

					if (result !== true && result !== undefined) return results
				} catch (error) {
					results[match.route.id] = { type: 'error', result: error }

					if (
						results[match.route.id].result !== true &&
						results[match.route.id].result !== undefined
					)
						return results
				}
			}

			return results
		},
		future: {
			v7_startTransition: true,
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_skipActionErrorRevalidation: true,
			v7_partialHydration: true,
		},
	}
)
