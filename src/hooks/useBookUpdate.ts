import { API_URL } from '@/constants/apiUrl'
import { Book } from '@/types/book'
import { enqueueSnackbar } from 'notistack'
import useSWRMutation from 'swr/mutation'

export function useBookUpdate(id: string) {
  const { trigger } = useSWRMutation(
    API_URL.bookDetail(id),
    (url, { arg }: { arg: Omit<Book, '_id'> }) =>
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(arg),
      }).then(() => {
        enqueueSnackbar(`Book “${arg.title}” updated`, { variant: 'success' })
      })
  )

  return { updateBook: trigger }
}
