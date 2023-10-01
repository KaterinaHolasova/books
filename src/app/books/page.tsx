import BookListPage from '@/components/pages/BookListPage/BookListPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All books',
}

export default function Page() {
  return <BookListPage />
}
