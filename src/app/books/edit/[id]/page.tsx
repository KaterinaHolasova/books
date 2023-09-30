import { fetcher } from '@/helpers/fetcher'
import { BookEditPage } from './BookEditPage'
import { Metadata } from 'next'
import { API_URL } from '@/constants/apiUrl'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = await fetcher(API_URL.bookDetail(params.id))

  return {
    title: `Edit: ${data.title}`,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return <BookEditPage id={params.id} />
}
