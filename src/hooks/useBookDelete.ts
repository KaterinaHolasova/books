import { API_URL } from '@/constants/apiUrl'
import { enqueueSnackbar } from 'notistack'

export function useBookDelete(id: string) {
  const deleteBook = () =>
    fetch(API_URL.bookDetail(id), {
      method: 'DELETE',
    }).then(() => {
      enqueueSnackbar(`Book deleted`, { variant: 'success' })
    })

  return { deleteBook }
}
