import { API_URL } from '@/constants/apiUrl'

export function deleteBook(id: string) {
  return fetch(API_URL.bookDetail(id), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'DELETE',
  })
}
