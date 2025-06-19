export interface ISumEntryProps {
	value: number | null
	onValueChange: (value: number) => void

	date: Date | null
	onDateChange: (date: Date) => void
}
