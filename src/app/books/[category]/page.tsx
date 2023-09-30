'use client'
import { BookList } from '@/components/BookList'
import { Header } from '@/components/Header'
import { CATEGORY_LABEL_MAP } from '@/constants/categoryLabelMap'
import { useBookList } from '@/hooks/useBookList'
import { Category } from '@/types/book'

export default function Page({ params }: { params: { category: Category } }) {
  const { data } = useBookList()

  return (
    <>
      <Header title={CATEGORY_LABEL_MAP[params.category]} />
      <BookList data={data.filter((item) => item.category == params.category)} />
    </>
  )
}
