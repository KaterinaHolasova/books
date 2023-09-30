import { Box, ButtonBase, Stack, Theme, Typography, useMediaQuery } from '@mui/material'
import { BookListItemProps } from './types'
import { wrapperSx } from './styles'
import { CoverImage } from '@/components/book/CoverImage'
import Link from 'next/link'
import { ActionMenu } from '@/components/common/ActionMenu'
import { useActionMenuItems } from './hooks/useActionMenuItems'
import { LINKS } from '@/constants/links'

export function BookListItem(props: BookListItemProps) {
  const { _id, author, category, coverImage, title } = props
  const actionMenuItems = useActionMenuItems(_id)

  const isTabletOrDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  return (
    <ButtonBase
      component={Link}
      disableRipple
      href={LINKS.bookDetail(_id, category)}
      sx={wrapperSx}
    >
      <Box component="span" mb={1}>
        <CoverImage alt={title} image={coverImage} />
      </Box>
      <Stack
        alignItems="flex-start"
        component="span"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography component="span" variant="h4">
          {title}
        </Typography>
        {isTabletOrDesktop && <ActionMenu items={actionMenuItems} />}
      </Stack>
      <Typography component="span">{author}</Typography>
    </ButtonBase>
  )
}
