'use client'
import { BookList } from '@/components/BookList'
import { Header } from '@/components/Header'
import { useBookList } from '@/hooks/useBookList'
import { Category } from '@/types/book'

export default function Page({ params }: { params: { category: Category } }) {
  const { data } = useBookList()

  return (
    <>
      <Header title={params.category} />
      <BookList data={data.filter((item) => item.category == params.category)} />
    </>
  )
}
