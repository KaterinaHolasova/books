import { Box, ButtonBase, IconButton, Stack, Typography } from '@mui/material'
import { BookListItemProps } from './types'
import { wrapperSx } from './styles'
import { CoverImage } from '@/components/CoverImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import { deleteBook } from '@/helpers/deleteBook'

export function BookListItem(props: BookListItemProps) {
  const { _id, author, coverImage, title } = props

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    deleteBook(_id)
  }

  return (
    <ButtonBase component={Link} disableRipple href={`/admin/books/${_id}`} sx={wrapperSx}>
      <Stack component="span" spacing={1} sx={{ width: '100%' }}>
        <CoverImage alt={title} image={coverImage} />
        <Box component="span">
          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Typography component="span" variant="h4">
              {title}
            </Typography>
            <IconButton onClick={handleDelete} size="small">
              <FontAwesomeIcon icon={faTrashCan} />
            </IconButton>
          </Stack>
          <Typography component="span" variant="body2">
            {author}
          </Typography>
        </Box>
      </Stack>
    </ButtonBase>
  )
}
