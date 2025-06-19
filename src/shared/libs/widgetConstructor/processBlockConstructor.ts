export const processBlockConstructor = ({
	block,
	fields,
}: {
	block: any
	fields: { [key: string]: any }
}) => {
	const result: { [key: string]: any } = {}
	const blockKeys = Object.keys(block)

	blockKeys.forEach(key => {
		const value = block[key]
		if (!value) return

		const res = value.default ?? value ?? {}

		result[key] = Array.isArray(res)
			? res.map(fieldName => fields[fieldName]).filter(Boolean)
			: res
	})

	// const sortedFields = sortFields(result.fields)
	const newBlock = result.fields ? { ...result, fields: result.fields } : result

	return newBlock
}

// function sortFields(fields) {
// 	if (!fields) return

// 	let sortedFields = fields.filter(field => field.isActive !== false)
// 	const fieldsWithSeqNo = fields.filter(field => field[SEQUENCE_NO])

// 	Object.values(fieldsWithSeqNo).map(field => {
// 		const foundFieldIndex = fields.findIndex(f => f.name === field.name)
// 		if (foundFieldIndex === -1) return

// 		const seqNo = field[SEQUENCE_NO]
// 		sortedFields = arrayMove(sortedFields, field, seqNo)
// 	})

// 	return sortedFields
// }
