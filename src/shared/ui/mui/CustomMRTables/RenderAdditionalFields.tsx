import { getLabel } from '@/shared/lib/widgets'
import { TabContextV2 } from '@components/customComponents/CustomTabContext'
import {
	MasterForm,
	RenderInputFields,
} from '@components/customComponents/MasterForm'
import { Stack } from '@mui/material'
import { memo } from 'react'
import { ContainerDataTableDocuments } from './ContainerDataTableDocuments'
import { MRMasterTable } from './MRMasterTable'

export const RenderAdditionalFields = memo(
	({
		ids,
		additionalFields,
		elementsOption,
		isLoading,
		isEditable,
		onChangeValue,
		autocompleteData,
		row,
		customComponent,
		parentRow,
		isSubTable,
		...props
	}) => {
		const tabs = getTabs({
			tabs: additionalFields?.tabs,
			ids,
			elementsOption,
			isLoading,
			isEditable,
			row,
			onChangeValue,
			autocompleteData,
			customComponent,
			parentRow,
			isSubTable,
			...props,
		})

		return (
			<Stack gap={1} sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
				<Component
					elements={additionalFields.elements}
					CustomComponent={customComponent}
					isForm
				>
					<RenderInputFields
						ids={ids}
						elements={additionalFields.elements}
						elementsOption={elementsOption}
						isLoading={isLoading}
						isEditable={isEditable}
						row={row}
						onChangeValue={onChangeValue}
						autocompleteData={autocompleteData}
						{...props}
					/>
				</Component>

				<TabContextV2 tabs={tabs} />
			</Stack>
		)
	}
)

function getTabs({
	tabs,
	ids,
	elementsOption,
	isLoading,
	isEditable,
	row,
	onChangeValue,
	autocompleteData,
	customComponent: CustomComponent,
	parentRow,
	isSubTable,
	...props
}) {
	return tabs
		?.map(tab => {
			const firstBlock = tab.blocks[0]
			const label = getLabel(tab.label, firstBlock?.widgetName)

			switch (tab.componentName) {
				case 'table': {
					return {
						label,
						component: (
							<Component
								block={firstBlock}
								CustomComponent={CustomComponent}
								widgetName={tab.widgetName}
								isSubTable={isSubTable}
							>
								<MRMasterTable
									ids={ids}
									elements={tab}
									crudOptions={tab.crud}
									isInWidget={false}
									externalIsEditable={isEditable}
									parentRow={{ ...row?.original, ...parentRow?.original }}
								/>
							</Component>
						),
					}
				}
				case 'form':
					return {
						label,
						component: (
							<Component
								elements={tab}
								CustomComponent={CustomComponent}
								isForm
							>
								<MasterForm
									ids={ids}
									elements={tab}
									crudOptions={tab.crud}
									isInWidget={false}
									externalIsEditable={isEditable}
									parentRow={row?.original}
								/>
							</Component>
						),
					}
				case 'documents': {
					const block = tab.blocks[0]
					const id = ids?.[block.id]
					const type = block.type

					return {
						label,
						component: (
							<Component elements={tab} CustomComponent={CustomComponent}>
								<ContainerDataTableDocuments
									label={label}
									externalId={id}
									externalType={type}
									inTable={block.inTable}
									parentRow={row?.original}
									elements={tab}
									editRowAfterSave={block.editRowAfterSave}
								/>
							</Component>
						),
					}
				}
				default:
					return {
						label,
						component: (
							<Component
								elements={tab}
								CustomComponent={CustomComponent}
								isForm
							>
								<RenderInputFields
									ids={ids}
									elements={tab}
									elementsOption={elementsOption}
									isLoading={isLoading}
									isEditable={isEditable}
									row={row}
									onChangeValue={onChangeValue}
									autocompleteData={autocompleteData}
									{...props}
								/>
							</Component>
						),
					}
			}
		})
		.filter(Boolean)
}

const Component = ({
	CustomComponent,
	children,
	block = undefined,
	widgetName = undefined,
	elements = undefined,
	isSubTable = false,
	isForm = false,
}) => {
	if (!CustomComponent) return children

	return (
		<CustomComponent
			block={block}
			widgetName={widgetName}
			elements={elements}
			isSubTable={isSubTable}
			isForm={isForm}
		/>
	)
}
