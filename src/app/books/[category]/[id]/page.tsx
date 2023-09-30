'use client'
import { BookLayout } from '@/components/BookLayout'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { LINKS } from '@/constants/links'
import { deleteBook } from '@/helpers/deleteBook'
import { useBookDetail } from '@/hooks/useBookDetail'
import { faBookmark, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Chip, IconButton, Typography } from '@mui/material'
import Link from 'next/link'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useBookDetail(params.id)

  return data ? (
    <BookLayout coverImage={data.coverImage}>
      <Header
        title={
          <>
            {data.title}
            <br />
            <small>{data.author}</small>
          </>
        }
      >
        <IconButton component={Link} href={LINKS.editBook(params.id)}>
          <FontAwesomeIcon icon={faPen} />
        </IconButton>
        <IconButton onClick={() => deleteBook(params.id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </IconButton>
      </Header>
      <dl>
        <Box mb={2}>
          <Typography component="dt" gutterBottom variant="h4">
            Category
          </Typography>
          <Chip icon={<FontAwesomeIcon icon={faBookmark} />} label={data.category} />
        </Box>
        <Box mb={2}>
          <Typography component="dt" gutterBottom variant="h4">
            Description
          </Typography>
          <Typography component="dd" variant="body2">
            {data.description}
          </Typography>
        </Box>
      </dl>
    </BookLayout>
  ) : (
    <Loader />
  )
}
