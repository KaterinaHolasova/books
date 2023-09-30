import { LINKS } from '@/constants/links'
import { deleteBook } from '@/helpers/deleteBook'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListItemIcon, ListItemText, MenuItemProps } from '@mui/material'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'

export function useActionMenuItems(id: string): MenuItemProps[] {
  const router = useRouter()

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
      onClick: (event) => handleOnClick(event, () => deleteBook(id)),
      children: (
        <>
          <ListItemIcon>
            <FontAwesomeIcon icon={faTrashCan} />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </>
      ),
    },
  ]
}
