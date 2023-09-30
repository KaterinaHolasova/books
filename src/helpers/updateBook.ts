import { Book } from '@/types/book'

export function updateBook(id: string, data: Omit<Book, '_id'>) {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/${id}`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify(data),
  })
}
