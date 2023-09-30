import { Grid, Typography } from '@mui/material'
import { BookListItem } from './components/BookListItem'
import { BookListProps } from './types'

export function BookList(props: BookListProps) {
  const { data } = props

  return data.length === 0 ? (
    <Typography>No books</Typography>
  ) : (
    <Grid container>
      {data.map((item) => (
        <Grid key={item._id} item xs={6} sm={4} md={3} lg={2}>
          <BookListItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
