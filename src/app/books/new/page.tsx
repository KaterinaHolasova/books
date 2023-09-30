import { Metadata } from 'next'
import { BookCreatePage } from './BookCreatePage'

export const metadata: Metadata = {
  title: 'Add a new book',
}

export default function Page() {
  return <BookCreatePage />
}
