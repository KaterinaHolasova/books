'use client'
import { BookForm } from '@/components/book/BookForm'
import { Header } from '@/components/layout/Header'
import { Loader } from '@/components/common/Loader'
import { useBookDetail } from '@/hooks/useBookDetail'
import { useBookUpdate } from '@/hooks/useBookUpdate'
import { useRouter } from 'next/navigation'
import { BookEditPageProps } from './types'
import { useContext } from 'react'
import { AdminContext } from '@/contexts/AdminContext/AdminContext'
import { Alert, Link } from '@mui/material'
import { AdminZoneAlert } from '@/components/common/AdminZoneAlert'

export function BookEditPage(props: BookEditPageProps) {
  const { id } = props
  const { data, isLoading } = useBookDetail(id)
  const { isAdmin } = useContext(AdminContext)
  const router = useRouter()

  const { updateBook } = useBookUpdate(id, () => router.back())

  return (
    <>
      <Header title="Edit book" />
      <AdminZoneAlert />
      {isAdmin && data && (
        <BookForm
          defaultValues={{
            author: data.author,
            category: data.category,
            coverImage: data.coverImage,
            description: data.description,
            title: data.title,
          }}
          onSubmit={updateBook}
        />
      )}
      {isAdmin && isLoading && <Loader />}
    </>
  )
}
