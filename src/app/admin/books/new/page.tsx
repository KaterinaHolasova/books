'use client'
import { BookForm } from '@/components/BookForm'
import { createBook } from '@/helpers/createBook'

export default function Page() {
  return <BookForm onSubmit={createBook} />
}
