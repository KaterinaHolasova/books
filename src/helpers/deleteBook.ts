import { API_URL } from '@/constants/apiUrl'

export function deleteBook(id: string) {
  return fetch(API_URL.bookDetail(id), {
    method: 'DELETE',
  })
}
