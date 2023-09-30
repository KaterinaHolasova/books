import { API_URL } from '@/constants/apiUrl'
import { Book } from '@/types/book'
import { enqueueSnackbar } from 'notistack'
import useSWRMutation from 'swr/mutation'

export function useBookCreate() {
  const { trigger } = useSWRMutation(API_URL.bookList, (url, { arg }: { arg: Omit<Book, '_id'> }) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(arg),
    }).then(() => {
      enqueueSnackbar(`Book “${arg.title}” created`, { variant: 'success' })
    })
  )

  return { createBook: trigger }
}
