'use client'
import { BookList } from '@/components/BookList'
import { useBookList } from '@/hooks/useBookList'
import { Category } from '@/types/book'
import { Box, Stack, Typography } from '@mui/material'

export default function Page({ params }: { params: { category: Category } }) {
  const { data } = useBookList()

  return (
    <Stack>
      <Typography variant="h1">{params.category}</Typography>
      <Box>
        <BookList data={data.filter((item) => item.category == params.category)} />
      </Box>
    </Stack>
  )
}
