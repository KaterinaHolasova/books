import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useState, MouseEvent } from 'react'
import { ActionMenuProps } from './types'

export function ActionMenu(props: ActionMenuProps) {
  const { items } = props

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id="action-menu-trigger"
        aria-controls={open ? 'action-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </IconButton>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'action-menu-trigger',
        }}
      >
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </Menu>
    </>
  )
}
