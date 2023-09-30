'use client'
import { BookForm } from '@/components/BookForm'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { useBookDetail } from '@/hooks/useBookDetail'
import { useBookUpdate } from '@/hooks/useBookUpdate'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const { data, isLoading } = useBookDetail(params.id)
  const router = useRouter()

  const { updateBook } = useBookUpdate(params.id, () => router.back())

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
