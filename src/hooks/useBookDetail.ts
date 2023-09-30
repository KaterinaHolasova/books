'use client'
import useSWR from 'swr'
import { API_URL } from '@/constants/apiUrl'
import { fetcher } from '@/helpers/fetcher'
import { Book } from '@/types/book'

export function useBookDetail(id: string) {
  const { data, error, isLoading } = useSWR<Book>(API_URL.bookDetail(id), fetcher)

  return {
    data,
    error,
    isLoading,
  }
}
