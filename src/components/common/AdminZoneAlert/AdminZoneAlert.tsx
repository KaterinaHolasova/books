import { AdminContext } from '@/contexts/AdminContext/AdminContext'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, Button, IconButton, Theme, useMediaQuery } from '@mui/material'
import { useContext } from 'react'

export function AdminZoneAlert() {
  const { isAdmin, toggleIsAdmin } = useContext(AdminContext)
  const isTabletOrDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  if (!isAdmin) {
    return (
      <Alert
        severity="warning"
        action={
          isTabletOrDesktop ? (
            <Button
              onClick={toggleIsAdmin}
              size="small"
              startIcon={<FontAwesomeIcon icon={faLock} />}
            >
              Switch to admin mode
            </Button>
          ) : (
            <IconButton onClick={toggleIsAdmin} size="small">
              <FontAwesomeIcon icon={faLock} />
            </IconButton>
          )
        }
      >
        This is admin zone
      </Alert>
    )
  }
}
