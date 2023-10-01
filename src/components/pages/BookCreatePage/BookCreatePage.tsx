'use client'
import { BookForm } from '@/components/book/BookForm'
import { AdminZoneAlert } from '@/components/common/AdminZoneAlert'
import { Header } from '@/components/layout/Header'
import { AdminContext } from '@/contexts/AdminContext/AdminContext'
import { useBookCreate } from '@/hooks/useBookCreate'
import { Category } from '@/types/book'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export function BookCreatePage() {
  const router = useRouter()
  const { isAdmin } = useContext(AdminContext)

  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const { createBook, isMutating } = useBookCreate(() => router.back())

  return (
    <>
      <Header title="Add a new book" />
      <AdminZoneAlert />
      {isAdmin && (
        <BookForm defaultValues={{ category: category as Category }} isMutating={isMutating} onSubmit={createBook} />
      )}
    </>
  )
}
