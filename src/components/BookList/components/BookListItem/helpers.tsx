import { deleteBook } from '@/helpers/deleteBook'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListItemIcon, ListItemText, MenuItemProps } from '@mui/material'

export function getActionMenuItems(id: string): MenuItemProps[] {
  return [
    {
      onClick: () => null,
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
      onClick: () => deleteBook(id),
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
