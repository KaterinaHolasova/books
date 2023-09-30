import { Box, ButtonBase, Stack, Typography } from '@mui/material'
import { BookListItemProps } from './types'
import { wrapperSx } from './styles'
import { CoverImage } from '@/components/CoverImage'
import Link from 'next/link'
import { ActionMenu } from '@/components/ActionMenu'
import { useActionMenuItems } from './hooks/useActionMenuItems'
import { LINKS } from '@/constants/links'

export function BookListItem(props: BookListItemProps) {
  const { _id, author, category, coverImage, title } = props
  const actionMenuItems = useActionMenuItems(_id)

  return (
    <ButtonBase
      component={Link}
      disableRipple
      href={LINKS.bookDetail(_id, category)}
      sx={wrapperSx}
    >
      <Stack component="span" spacing={1} sx={{ width: '100%' }}>
        <CoverImage alt={title} image={coverImage} />
        <Box component="span">
          <Stack
            alignItems="flex-start"
            component="span"
            direction="row"
            justifyContent="space-between"
          >
            <Typography component="span" variant="h4">
              {title}
            </Typography>
            <ActionMenu items={actionMenuItems} />
          </Stack>
          <Typography component="span">{author}</Typography>
        </Box>
      </Stack>
    </ButtonBase>
  )
}
