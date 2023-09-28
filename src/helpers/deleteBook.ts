import { Book } from '@/types/book'

export function deleteBook(id: string) {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/${id}`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'DELETE',
  })
}
