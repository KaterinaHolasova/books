import { API_URL } from '@/constants/apiUrl'
import { BookInput } from '@/types/book'
import { enqueueSnackbar } from 'notistack'
import useSWRMutation from 'swr/mutation'

export function useBookUpdate(id: string, callback?: () => void) {
  const { trigger } = useSWRMutation(API_URL.bookDetail(id), (url, { arg }: { arg: BookInput }) =>
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(arg),
    }).then(() => {
      enqueueSnackbar(`Book “${arg.title}” updated`, { variant: 'success' })
      callback?.()
    })
  )

  return { updateBook: (data: BookInput) => trigger(data) }
}
