'use client'
import { faBook, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Stack,
  Theme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material'
import NextLink from 'next/link'
import { containerSx, wrapperSx } from './styles'

export function Header() {
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
              <Link href="/" variant="h6" component={NextLink}>
                <Box component="span" mr={2}>
                  <FontAwesomeIcon icon={faBook} />
                </Box>
                Books
              </Link>
            </Box>
            {isTabletOrDesktop ? (
              <Button startIcon={<FontAwesomeIcon icon={faLock} />} variant="outlined">
                Switch to admin view
              </Button>
            ) : (
              <IconButton>
                <FontAwesomeIcon icon={faLock} />
              </IconButton>
            )}
          </Stack>
        </Box>
      </AppBar>
    </Box>
  )
}
