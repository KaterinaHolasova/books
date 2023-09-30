import { API_URL } from '@/constants/apiUrl'
import { Book } from '@/types/book'

export function updateBook(id: string, data: Omit<Book, '_id'>) {
  return fetch(API_URL.bookDetail(id), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify(data),
  })
}
