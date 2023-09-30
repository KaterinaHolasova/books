'use client'
import { LINKS } from '@/constants/links'
import { AdminContext } from '@/contexts/AdminContext/AdminContext'
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useContext } from 'react'

export function HomePage() {
  const { isAdmin } = useContext(AdminContext)
  return (
    <Stack alignItems="center" textAlign="center">
      <Typography variant="h1">Welcome to Books!</Typography>
      <Stack direction="row" spacing={2}>
        <Button
          component={Link}
          href={LINKS.books}
          startIcon={<FontAwesomeIcon icon={faBook} />}
          variant="outlined"
        >
          Explore all books
        </Button>
        {isAdmin && (
          <Button
            component={Link}
            href={LINKS.newBook}
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Add a new book
          </Button>
        )}
      </Stack>
    </Stack>
  )
}
