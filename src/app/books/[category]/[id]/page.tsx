'use client'
import { BookLayout } from '@/components/BookLayout'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { CATEGORY_LABEL_MAP } from '@/constants/categoryLabelMap'
import { LINKS } from '@/constants/links'
import { deleteBook } from '@/helpers/deleteBook'
import { useBookDetail } from '@/hooks/useBookDetail'
import { faBookmark, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Chip, IconButton, Typography } from '@mui/material'
import Error from 'next/error'
import Link from 'next/link'

export default function Page({ params }: { params: { id: string } }) {
  const { data, loading } = useBookDetail(params.id)

  if (loading) {
    return <Loader />
  }

  if (!data) {
    return <Error statusCode={404} />
  }

  return (
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
          <Chip
            clickable
            component={Link}
            href={LINKS.booksCategory(data.category)}
            icon={<FontAwesomeIcon icon={faBookmark} />}
            label={CATEGORY_LABEL_MAP[data.category]}
          />
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
  )
}
