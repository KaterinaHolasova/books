import { API_URL } from '@/constants/apiUrl'
import { BookInput } from '@/types/book'
import { enqueueSnackbar } from 'notistack'
import useSWRMutation from 'swr/mutation'

export function useBookCreate(callback?: () => void) {
  const { trigger } = useSWRMutation(API_URL.bookList, (url, { arg }: { arg: BookInput }) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(arg),
    }).then(() => {
      enqueueSnackbar(`Book “${arg.title}” created`, { variant: 'success' })
      callback?.()
    })
  )

  return { createBook: (data: BookInput) => trigger(data) }
}
