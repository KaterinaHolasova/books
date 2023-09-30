import { LINKS } from '@/constants/links'
import { Box, Button } from '@mui/material'
import Link from 'next/link'

export function HomePage() {
  return (
    <Box textAlign="center">
      <Button component={Link} href={LINKS.books}>
        Explore books
      </Button>
    </Box>
  )
}
