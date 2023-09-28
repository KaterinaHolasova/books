'use client'
import { BookList } from '@/components/BookList'
import { useBookList } from '@/hooks/useBookList'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Stack, Typography } from '@mui/material'
import NextLink from 'next/link'

export default function Page() {
  const { data } = useBookList()

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h1">All books</Typography>
        <Button
          component={NextLink}
          href="/admin/books/new"
          startIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          Add a new book
        </Button>
      </Stack>
      <Box>
        <BookList data={data} />
      </Box>
    </Stack>
  )
}
