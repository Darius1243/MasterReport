// src/apolloClient.ts
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client' // ApolloLink убран, если не используется authMiddleware

// Получаем URL GraphQL API из переменных окружения Vite
// Используем URL из твоего codegen.yml как значение по умолчанию
const GRAPHQL_URI =
	import.meta.env.VITE_GRAPHQL_API_URL || 'http://localhost:4000/graphql'

const httpLink = new HttpLink({
	uri: GRAPHQL_URI,
})

// Пример middleware для авторизации (раскомментируй и настрой, если нужно)
// import { ApolloLink } from '@apollo/client';
// const authMiddleware = new ApolloLink((operation, forward) => {
//   // Добавляем токен авторизации к каждому запросу, если он есть
//   const token = localStorage.getItem('authToken'); // Или другой способ получения токена
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : null,
//     }
//   }));
//   return forward(operation);
// });

export const apolloClient = new ApolloClient({
	// link: ApolloLink.from([authMiddleware, httpLink]), // Используй это, если добавил authMiddleware
	link: httpLink,
	cache: new InMemoryCache(),
	connectToDevTools: import.meta.env.DEV, // Включаем Apollo DevTools только в режиме разработки
})
