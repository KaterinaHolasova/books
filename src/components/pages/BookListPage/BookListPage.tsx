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

export default function BookListPage() {
  const { data, isLoading } = useBookList()

  return (
    <>
      <Header title="All books">
        <Button component={Link} href={LINKS.newBook} startIcon={<FontAwesomeIcon icon={faPlus} />}>
          Add a new book
        </Button>
      </Header>
      {data && <BookList data={data} />}
      {isLoading && <BookListLoader />}
    </>
  )
}