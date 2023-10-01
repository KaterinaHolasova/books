import useSWR from 'swr'
import { API_URL } from '@/constants/apiUrl'
import { fetcher } from '@/helpers/fetcher'
import { Book } from '@/types/book'

export function useBookList() {
  const { data, error, isLoading } = useSWR<Book[]>(API_URL.bookList, fetcher)

  return {
    data,
    error,
    isLoading,
  }
}
