import React from 'react'
import { toast } from 'react-toastify'

// Карта для возможного перевода системных имен полей в человекочитаемые
const fieldTranslations: Record<string, string> = {
	email: 'Email',
	name: 'ФИО',
	// Добавьте другие поля по мере необходимости
}

const translateFieldName = (fieldName: string): string => {
	return fieldTranslations[fieldName.toLowerCase()] || fieldName
}

// Функция для разбора сообщений об ошибках уникальности (например, от Prisma)
const parseUniqueConstraintMessage = (
	message: string,
	targetFields?: string[]
): string | undefined => {
	let fields: string[] = []
	if (targetFields && targetFields.length > 0) {
		fields = targetFields
	} else {
		const uniqueConstraintMatch = message.match(
			/Unique constraint failed on the fields: \(([^)]+)\)/i
		)
		if (uniqueConstraintMatch && uniqueConstraintMatch[1]) {
			fields = uniqueConstraintMatch[1].split(',').map(f => f.trim())
		}
	}

	if (fields.length > 0) {
		const translatedFields = fields.map(translateFieldName).join(', ')
		return `Запись с таким значением для поля '${translatedFields}' уже существует.`
	}

	if (
		message.toLowerCase().includes('unique constraint') ||
		message.toLowerCase().includes('p2002')
	) {
		return 'Запись с указанными уникальными данными уже существует.'
	}
	return undefined
}

// Вспомогательная функция для извлечения сообщения из объекта ошибки
const getErrorMessage = (error: any): string | undefined => {
	if (!error) return 'Произошла неизвестная ошибка (объект ошибки отсутствует).'

	// 1. Обработка сетевых ошибок Apollo (включая ERR_CONNECTION_REFUSED)
	if (error.networkError) {
		// "Failed to fetch" часто является симптомом ERR_CONNECTION_REFUSED
		if (
			typeof error.networkError.message === 'string' &&
			error.networkError.message.toLowerCase().includes('failed to fetch')
		) {
			return 'Не удалось связаться с сервером. Проверьте ваше интернет-соединение и убедитесь, что сервер запущен и доступен по адресу http://localhost:4000.'
		}
		return typeof error.networkError.message === 'string'
			? `Ошибка сети: ${error.networkError.message}`
			: 'Произошла сетевая ошибка. Проверьте ваше интернет-соединение.'
	}

	// 2. Обработка ошибок GraphQL (массив graphQLErrors)
	if (Array.isArray(error.graphQLErrors) && error.graphQLErrors.length > 0) {
		const gqlError = error.graphQLErrors[0] // Берем первую ошибку для простоты

		// Попытка извлечь более специфичное сообщение из extensions (например, от Prisma)
		if (gqlError.extensions?.originalError) {
			const originalError = gqlError.extensions.originalError
			if (originalError.code === 'P2002') {
				// Prisma unique constraint violation
				return parseUniqueConstraintMessage(
					originalError.message,
					originalError.meta?.target
				)
			}
			if (typeof originalError.message === 'string')
				return originalError.message
		}

		// Сообщение из самого graphQLError
		if (typeof gqlError.message === 'string') {
			const parsedGqlMessage = parseUniqueConstraintMessage(gqlError.message)
			if (parsedGqlMessage) return parsedGqlMessage
			return gqlError.message
		}
	}

	// 3. Стандартное свойство error.message
	if (typeof error.message === 'string') {
		const parsedTopLevelMessage = parseUniqueConstraintMessage(error.message)
		if (parsedTopLevelMessage) return parsedTopLevelMessage
		return error.message
	}

	// 4. Если ошибка передана как строка
	if (typeof error === 'string') return error

	return 'Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз.'
}

export async function showToastPromise<T>(
	promise: Promise<T>,
	texts?: { pending: string; success: string; error: string }
): Promise<T> {
	const defaultErrorText = texts?.error ?? 'Произошла ошибка 😥'
	return await toast.promise(promise, {
		pending: texts?.pending ?? 'Запрос выполняется... ⏳',
		success: texts?.success ?? 'Запрос успешно выполнен! 🎉',
		error: err => {
			const actualErrorMessage = getErrorMessage(err)
			return React.createElement(
				'div',
				null,
				React.createElement('span', null, defaultErrorText),
				actualErrorMessage && React.createElement('br'),
				actualErrorMessage &&
					React.createElement(
						'small',
						{ style: { opacity: 0.8, display: 'block', marginTop: '4px' } },
						actualErrorMessage
					)
			)
		},
	})
}

export function showToastError(baseMessage?: string, error?: any): void {
	const defaultMessage = baseMessage ?? 'Произошла ошибка 😥'
	const actualErrorMessage = getErrorMessage(error)
	toast.error(
		React.createElement(
			'div',
			null,
			React.createElement('span', null, defaultMessage),
			actualErrorMessage && React.createElement('br'),
			actualErrorMessage &&
				React.createElement(
					'small',
					{ style: { opacity: 0.8, display: 'block', marginTop: '4px' } },
					actualErrorMessage
				)
		)
	)
}
