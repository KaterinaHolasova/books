import { Grid, Skeleton, Stack } from '@mui/material'
import { CoverImageLoader } from '../CoverImageLoader/CoverImageLoader'

export function BookListLoader() {
  return (
    <Grid container>
      {[...Array(4)].map((_, key) => (
        <Grid key={key} item xs={6} sm={4} md={3} lg={2}>
          <Stack spacing={1}>
            <CoverImageLoader />
            <Skeleton />
            <Skeleton width="60%" />
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}
