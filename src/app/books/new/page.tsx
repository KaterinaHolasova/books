'use client'
import { BookForm } from '@/components/BookForm'
import { Header } from '@/components/Header'
import { createBook } from '@/helpers/createBook'

export default function Page() {
  return (
    <>
      <Header title="Add a new book" />
      <BookForm onSubmit={createBook} />
    </>
  )
}
