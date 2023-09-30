import { BookDetailPage } from './BookDetailPage'
import { API_URL } from '@/constants/apiUrl'
import { fetcher } from '@/helpers/fetcher'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = await fetcher(API_URL.bookDetail(params.id))

  return {
    title: data.title,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return <BookDetailPage id={params.id} />
}
