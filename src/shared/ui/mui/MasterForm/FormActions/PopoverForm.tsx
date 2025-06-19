import { DEBOUNCE_DELAY, INVISIBLE_SYMBOL } from '@constants/Constants'
import { getBlockKey } from '@helper/formFieldsVisibilityMethods'
import { Button, Divider, List, ListItem, Popover, Switch, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { StorageService } from '@services/index'
import { useQueryClient } from '@tanstack/react-query'
import { getEventCodeFromPath } from '@utils/getEventCodeFromPath'
import { Dispatch, Fragment, SetStateAction, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebouncedCallback } from 'use-debounce'
import { IconButton } from '../../Button'

export const PopoverForm = ({
	widgetName,
	blocks,
	set,
}: {
	widgetName: string | undefined | null
	blocks: any[]
	set: Dispatch<SetStateAction<any[]>>
}) => {
	const queryClient = useQueryClient()
	const { t } = useTranslation()
	const [anchorEl, setAnchorEl] = useState(null)

	const open = Boolean(anchorEl)

	const eventCode = getEventCodeFromPath()

	const disableShowAll = useMemo(
		() => !blocks.some(block => block.fields.some(field => field.isHiddenField)),
		[blocks],
	)

	const handleClick = event => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	// сохранить настройки видимости для БЛОКОВ (теперь можно несколько за раз)
	const setVisibilityBlocks = useDebouncedCallback((blockIndexes: number[]) => {
		let fieldsBatch: Record<string, any> = blockIndexes.reduce(
			(acc, blockIndex) => {
				const fieldName = getBlockKey(blocks[blockIndex], blockIndex, widgetName)
				acc[fieldName] = []

				blocks[blockIndex]?.fields.forEach(
					({ name, isHiddenField }: { name: string; isHiddenField: boolean }) => {
						if (isHiddenField) {
							acc[fieldName].push(name)
						}
					},
				)

				return acc
			},
			{} as Record<string, any[]>,
		)

		StorageService.set(queryClient, `forms_${eventCode}`, fieldsBatch)
	}, DEBOUNCE_DELAY)

	// обновить видимость и настройки для пользователя
	const setUpdatedBlocks = (updatedBlocks: any[], blockIndex?: number) => {
		set(prev => ({ ...prev, blocks: updatedBlocks }))
		if (blockIndex !== undefined) setVisibilityBlocks([blockIndex])
		else {
			const allIndexes = updatedBlocks.map((_, index) => index)
			setVisibilityBlocks(allIndexes)
		}
	}

	// нажатие для одного элемента blockIndex - индекс блока,index -индекс
	const handleToggle = (blockIndex: number, elementIndex: number) => {
		const updatedBlocks = [...blocks]
		const updatedBlock = updatedBlocks[blockIndex]

		updatedBlock.fields[elementIndex].isHiddenField = !updatedBlock.fields[elementIndex].isHiddenField
		updatedBlocks[blockIndex] = updatedBlock

		setUpdatedBlocks(updatedBlocks, blockIndex)
	}

	// скрыть/показать все
	const handleShow = (isHiddenField: boolean) => {
		const updatedBlocks = blocks.map((block: Record<string, any>) => ({
			...block,
			fields: block.fields.map((field: Record<string, any>) => ({
				...field,
				isHiddenField: isHiddenField && field.required ? false : isHiddenField,
			})),
		}))

		setUpdatedBlocks(updatedBlocks)
	}

	return (
		<>
			<IconButton icon={'SettingsIcon'} onClick={handleClick} />

			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				aria-haspopup='true'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}
			>
				<Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
					<Button onClick={() => handleShow(true)}>{t('hideAll')}</Button>
					<Button onClick={() => handleShow(false)} disabled={disableShowAll}>
						{t('showAll')}
					</Button>
				</Box>
				<Divider />
				<List sx={{ p: 0 }} role='menu'>
					{blocks.map((blockItem: Record<string, any>, blockIndex: number) => (
						<Fragment key={blockIndex}>
							{blockIndex > 0 && <Divider />}
							{blockItem.fields.map(
								(
									item: {
										type: string
										isHiddenField: boolean | undefined
										required: boolean | undefined
										label: string | null | undefined
										name: string | null | undefined
									},
									index: number,
								) => (
									<ListItem
										key={item.name}
										sx={{
											display: item.type === 'hidden-form' ? 'none' : 'flex',
											alignItems: 'center',
										}}
										role='menuitem'
									>
										<Switch
											checked={!item.isHiddenField}
											disabled={item.required}
											onClick={() => !item.required && handleToggle(blockIndex, index)}
										/>

										<Typography fontSize={'1em'}>{t(getLabel(item, blockItem))}</Typography>
									</ListItem>
								),
							)}
						</Fragment>
					))}
				</List>
			</Popover>
		</>
	)
}

const getLabel = (item, blockItem): string => {
	if (blockItem.labelPrefix && !item.label) {
		return `${blockItem.labelPrefix}.${item.name}`
	}

	return item.label ?? item.name ?? INVISIBLE_SYMBOL
}
