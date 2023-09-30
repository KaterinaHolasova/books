import { API_URL } from '@/constants/apiUrl'
import { Book } from '@/types/book'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'

export function useBookUpdate(id: string) {
  const router = useRouter()

  const updateBook = (data: Omit<Book, '_id'>) =>
    fetch(API_URL.bookDetail(id), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'PUT',
      body: JSON.stringify(data),
    }).then(() => {
      enqueueSnackbar(`Book “${data.title}” updated`, { variant: 'success' })
      router.back()
    })

  return { updateBook }
}
