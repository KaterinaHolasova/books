const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const RESOURCE = 'books'

export const API_URL = {
  bookDetail: (id: string) => `${API_ENDPOINT}/${RESOURCE}/${id}`,
  bookList: `${API_ENDPOINT}/${RESOURCE}`,
} as const
