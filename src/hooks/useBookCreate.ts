import { API_URL } from '@/constants/apiUrl'
import { Book } from '@/types/book'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'

export function useBookCreate() {
  const router = useRouter()

  const createBook = (data: Omit<Book, '_id'>) =>
    fetch(API_URL.bookList, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify(data),
    }).then(() => {
      enqueueSnackbar(`Book “${data.title}” created`, { variant: 'success' })
      router.back()
    })

  return { createBook }
}
