import { API_URL } from '@/constants/apiUrl'
import { enqueueSnackbar } from 'notistack'
import useSWRMutation from 'swr/mutation'

export function useBookDelete(id: string) {
  const { trigger } = useSWRMutation(API_URL.bookDetail(id), (url) =>
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      enqueueSnackbar(`Book deleted`, { variant: 'success' })
    })
  )

  return { deleteBook: trigger }
}
