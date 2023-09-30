'use client'
import { BookForm } from '@/components/BookForm'
import { updateBook } from '@/helpers/updateBook'
import { useBookDetail } from '@/hooks/useBookDetail'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useBookDetail(params.id)

  return <BookForm defaultValues={data} onSubmit={(data) => updateBook(params.id, data)} />
}
