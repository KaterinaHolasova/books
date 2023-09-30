'use client'
import { faBook, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Theme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material'
import NextLink from 'next/link'
import { containerSx, wrapperSx } from './styles'
import { LINKS } from '@/constants/links'
import { useContext } from 'react'
import { AdminContext } from '@/contexts/AdminContext/AdminContext'

export function Navigation() {
  const { isAdmin, toggleIsAdmin } = useContext(AdminContext)
  const isTabletOrDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <Box sx={containerSx}>
      <AppBar>
        <Box sx={wrapperSx(trigger)}>
          <Stack alignItems="center" direction="row">
            <Box sx={{ flexGrow: 1 }}>
              <Link component={NextLink} href={LINKS.root} variant="h6">
                <Box component="span" mr={2}>
                  <FontAwesomeIcon icon={faBook} />
                </Box>
                Books
              </Link>
            </Box>
            {isTabletOrDesktop ? (
              <Button
                onClick={toggleIsAdmin}
                startIcon={<FontAwesomeIcon icon={isAdmin ? faUser : faLock} />}
                variant="outlined"
              >
                {isAdmin ? 'Switch to user mode' : 'Switch to admin mode'}
              </Button>
            ) : (
              <IconButton onClick={toggleIsAdmin}>
                <FontAwesomeIcon icon={faLock} />
              </IconButton>
            )}
          </Stack>
        </Box>
      </AppBar>
    </Box>
  )
}
