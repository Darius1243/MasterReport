import { Link } from 'react-router'

export const NoMatchPage = () => {
	return (
		<div>
			<h2>Страница не найдена!</h2>
			<p>
				<Link to='../'>Перейдите на главную страницу</Link>
			</p>
		</div>
	)
}
