'use client'
import { BookForm } from '@/components/BookForm'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { useBookDetail } from '@/hooks/useBookDetail'
import { useBookUpdate } from '@/hooks/useBookUpdate'
import { useRouter } from 'next/navigation'
import { BookEditPageProps } from './types'

export function BookEditPage(props: BookEditPageProps) {
  const { id } = props
  const { data, isLoading } = useBookDetail(id)
  const router = useRouter()

  const { updateBook } = useBookUpdate(id, () => router.back())

  return (
    <>
      <Header title="Edit book" />
      {data && (
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
      {isLoading && <Loader />}
    </>
  )
}
