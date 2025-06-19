import Avatar, { AvatarProps } from '@mui/material/Avatar'

interface IAvatar extends AvatarProps {
	text: string
	photo?: string
}

export const MuiAvatar = ({ text, photo, sx, ...props }: IAvatar) => {
	return (
		<Avatar
			alt={text}
			src={photo}
			{...stringAvatar(text)}
			sx={{
				width: 35,
				height: 35,
				fontSize: 14,
				color: 'var(--Schemes-On-Surface, #1A1B20)',
				bgcolor: 'background.paper',
				...sx,
			}}
			{...props}
		/>
	)
}

function stringAvatar(name: string) {
	if (!name) return { children: 'U' }

	const words = name.split(' ')
	const initials =
		words.length === 1
			? words[0].slice(0, 2).toUpperCase()
			: words
					.slice(0, 2)
					.map(word => word[0])
					.join('')
					.toUpperCase()

	return {
		// sx: { bgcolor: stringToColor(name) },
		children: initials,
	}
}

function stringToColor(string: string) {
	if (!string) return

	let hash = 0
	let i

	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash)
	}

	let color = '#'

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff
		color += `00${value.toString(16)}`.slice(-2)
	}

	return color
}
