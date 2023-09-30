'use client'
import { BookList } from '@/components/book/BookList'
import { BookListLoader } from '@/components/book/BookListLoader'
import { Header } from '@/components/layout/Header'
import { LINKS } from '@/constants/links'
import { useIsAdmin } from '@/hooks/useIsAdmin'
import { useBookList } from '@/hooks/useBookList'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function BookListPage() {
  const { data, isLoading } = useBookList()
  const { isAdmin } = useIsAdmin()

  return (
    <>
      <Header title="All books">
        {isAdmin && (
          <Button
            component={Link}
            href={LINKS.admin.newBook}
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Add a new book
          </Button>
        )}
      </Header>
      {data && <BookList data={data} />}
      {isLoading && <BookListLoader />}
    </>
  )
}
