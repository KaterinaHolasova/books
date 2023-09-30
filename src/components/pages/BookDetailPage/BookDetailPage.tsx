'use client'
import { BookLayout } from '@/components/book/BookLayout'
import { Header } from '@/components/layout/Header'
import { Loader } from '@/components/common/Loader'
import { CATEGORY_LABEL_MAP } from '@/constants/categoryLabelMap'
import { LINKS } from '@/constants/links'
import { useBookDelete } from '@/hooks/useBookDelete'
import { useBookDetail } from '@/hooks/useBookDetail'
import { faBookmark, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Chip, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BookDetailPageProps } from './types'

export function BookDetailPage(props: BookDetailPageProps) {
  const { id } = props
  const { data, isLoading } = useBookDetail(id)
  const router = useRouter()

  const { deleteBook } = useBookDelete(id, () => router.back())

  if (isLoading) return <Loader />

  return (
    data && (
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
          <IconButton component={Link} href={LINKS.editBook(id)}>
            <FontAwesomeIcon icon={faPen} />
          </IconButton>
          <IconButton onClick={() => deleteBook().then(() => router.back())}>
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
            <Typography component="dd">{data.description}</Typography>
          </Box>
        </dl>
      </BookLayout>
    )
  )
}
