'use client'
import { BookForm } from '@/components/BookForm'
import { Header } from '@/components/Header'
import { updateBook } from '@/helpers/updateBook'
import { useBookDetail } from '@/hooks/useBookDetail'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useBookDetail(params.id)

  return (
    <>
      <Header title="Edit book" />
      <BookForm defaultValues={data} onSubmit={(data) => updateBook(params.id, data)} />
    </>
  )
}
