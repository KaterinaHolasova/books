import { API_URL } from '@/constants/apiUrl'
import { enqueueSnackbar } from 'notistack'
import useSWRMutation from 'swr/mutation'

export function useBookDelete(id: string, callback?: () => void) {
  const { trigger, isMutating } = useSWRMutation(API_URL.bookDetail(id), (url) =>
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      enqueueSnackbar('Book deleted', { variant: 'success' })
      callback?.()
    })
  )

  return { deleteBook: () => trigger(), isMutating }
}
