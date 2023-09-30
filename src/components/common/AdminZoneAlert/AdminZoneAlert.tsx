import { AdminContext } from '@/contexts/AdminContext/AdminContext'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, Button } from '@mui/material'
import { useContext } from 'react'

export function AdminZoneAlert() {
  const { isAdmin, toggleIsAdmin } = useContext(AdminContext)

  return (
    !isAdmin && (
      <Alert
        severity="warning"
        action={
          <Button
            onClick={toggleIsAdmin}
            size="small"
            startIcon={<FontAwesomeIcon icon={faLock} />}
          >
            Switch to admin mode
          </Button>
        }
      >
        This is admin zone
      </Alert>
    )
  )
}
