'use client'
import { BookLayout } from '@/components/BookLayout'
import { useBookDetail } from '@/hooks/useBookDetail'
import { faBookmark, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Chip, IconButton, Stack, Theme, Typography, useMediaQuery } from '@mui/material'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useBookDetail(params.id)
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <BookLayout coverImage={data?.coverImage}>
      <Box mb={{ xs: 3, lg: 4 }}>
        <Stack direction={isDesktop ? 'row' : 'column'} alignItems="start">
          <Box sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h1">
              {data?.title}
            </Typography>
            <Typography variant="body2">{data?.author}</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <IconButton>
              <FontAwesomeIcon icon={faPen} />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={faTrashCan} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
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
