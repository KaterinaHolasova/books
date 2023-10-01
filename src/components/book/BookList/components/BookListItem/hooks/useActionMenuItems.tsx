import { API_URL } from '@/constants/apiUrl'
import { LINKS } from '@/constants/links'
import { useBookDelete } from '@/hooks/useBookDelete'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgress, ListItemIcon, ListItemText, MenuItemProps } from '@mui/material'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'
import { useSWRConfig } from 'swr'

export function useActionMenuItems(id: string): MenuItemProps[] {
  const router = useRouter()
  const { mutate } = useSWRConfig()

  const { deleteBook, isMutating } = useBookDelete(id, () => mutate(API_URL.bookList))

  const handleOnClick = (event: MouseEvent<HTMLLIElement>, callback: () => void) => {
    event.preventDefault()
    callback()
  }

  return [
    {
      onClick: (event) => handleOnClick(event, () => router.push(LINKS.editBook(id))),
      children: (
        <>
          <ListItemIcon>
            <FontAwesomeIcon icon={faPen} />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </>
      ),
    },
    {
      disabled: isMutating,
      onClick: (event) => handleOnClick(event, deleteBook),
      children: (
        <>
          <ListItemIcon>
            {isMutating ? <CircularProgress /> : <FontAwesomeIcon icon={faTrashCan} />}
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </>
      ),
    },
  ]
}
