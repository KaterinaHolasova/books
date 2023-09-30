import { Grid } from '@mui/material'
import { BookLayoutProps } from './types'
import { CoverImage } from '../CoverImage'
import CoverImageLoader from '../CoverImageLoader/CoverImageLoader'

export function BookLayout(props: BookLayoutProps) {
  const { children, coverImage, coverImagePlaceholder } = props

  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={7} md={6} lg={4}>
        {children}
      </Grid>
      <Grid item xs={12} sm={5} md={6} lg={5}>
        {coverImage ? (
          <CoverImage image={coverImage} />
        ) : (
          coverImagePlaceholder ?? <CoverImageLoader />
        )}
      </Grid>
    </Grid>
  )
}
