import { TFormField } from './TypeInputField'

export interface IElement {
	label?: string
	labelPrefix?: string
	colWidth?: number
	elements: TFormField[]
}

export type IElements = IElement[]

export interface IElementNumberOptions {
	classId: number
	measureId: number
	multiplier: number
	offset: number
	decimalScale: number
	useDatum: boolean
	isNotSave?: boolean
}
