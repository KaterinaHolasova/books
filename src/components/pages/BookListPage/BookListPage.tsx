'use client'
import { BookList } from '@/components/book/BookList'
import { BookListLoader } from '@/components/book/BookListLoader'
import { Header } from '@/components/layout/Header'
import { LINKS } from '@/constants/links'
import { useBookList } from '@/hooks/useBookList'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useContext } from 'react'
import { AdminContext } from '@/contexts/AdminContext/AdminContext'

export default function BookListPage() {
  const { data, isLoading } = useBookList()
  const { isAdmin } = useContext(AdminContext)

  return (
    <>
      <Header title="All books">
        {isAdmin && (
          <Button
            component={Link}
            href={LINKS.newBook}
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Add a new book
          </Button>
        )}
      </Header>
      {isLoading && <BookListLoader />}
      {data && <BookList data={data} />}
    </>
  )
}
