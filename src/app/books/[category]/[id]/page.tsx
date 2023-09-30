'use client'
import { BookLayout } from '@/components/BookLayout'
import { Header } from '@/components/Header'
import { useBookDetail } from '@/hooks/useBookDetail'
import { faBookmark, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Chip, IconButton, Typography } from '@mui/material'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useBookDetail(params.id)

  return (
    <BookLayout coverImage={data?.coverImage}>
      <Header
        title={
          <>
            {data?.title}
            <br />
            <small>{data?.author}</small>
          </>
        }
      >
        <IconButton>
          <FontAwesomeIcon icon={faPen} />
        </IconButton>
        <IconButton>
          <FontAwesomeIcon icon={faTrashCan} />
        </IconButton>
      </Header>
      <dl>
        <Box mb={2}>
          <Typography component="dt" gutterBottom variant="h4">
            Category
          </Typography>
          <Chip icon={<FontAwesomeIcon icon={faBookmark} />} label={data?.category} />
        </Box>
        <Box mb={2}>
          <Typography component="dt" gutterBottom variant="h4">
            Description
          </Typography>
          <Typography component="dd" variant="body2">
            {data?.description}
          </Typography>
        </Box>
      </dl>
    </BookLayout>
  )
}
