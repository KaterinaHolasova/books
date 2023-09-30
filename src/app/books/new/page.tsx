'use client'
import { BookForm } from '@/components/BookForm'
import { Header } from '@/components/Header'
import { useBookCreate } from '@/hooks/useBookCreate'
import { Category } from '@/types/book'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const { createBook } = useBookCreate()

  return (
    <>
      <Header title="Add a new book" />
      <BookForm defaultValues={{ category: category as Category }} onSubmit={createBook} />
    </>
  )
}
