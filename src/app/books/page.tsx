import { Metadata } from 'next'
import BookListPage from './BookListPage'

export const metadata: Metadata = {
  title: 'All books',
}

export default function Page() {
  return <BookListPage />
}
