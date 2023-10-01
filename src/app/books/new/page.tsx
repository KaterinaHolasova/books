import { BookCreatePage } from '@/components/pages/BookCreatePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Add a new book',
}

export default function Page() {
  return <BookCreatePage />
}
