import { Box, Stack, Typography } from '@mui/material'
import { HeaderProps } from './types'

export function Header(props: HeaderProps) {
  const { children, title } = props

  return (
    <Box mb={{ xs: 2, sm: 3, lg: 4 }}>
      <Stack
        alignItems="flex-start"
        direction={{ sm: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Typography variant="h1">{title}</Typography>
        <Stack direction="row" spacing={1}>
          {children}
        </Stack>
      </Stack>
    </Box>
  )
}
