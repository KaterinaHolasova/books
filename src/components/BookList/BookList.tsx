import { Grid } from '@mui/material'
import { BookListItem } from './components/BookListItem'
import { BookListProps } from './types'

export function BookList(props: BookListProps) {
  const { data } = props

  return (
    <Grid container>
      {data.map((item) => (
        <Grid key={item._id} item xs={6} sm={4} md={3} lg={2}>
          <BookListItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
