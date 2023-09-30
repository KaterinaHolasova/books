'use client'
import { BookList } from '@/components/BookList'
import { BookListLoader } from '@/components/BookListLoader'
import { Header } from '@/components/Header'
import { LINKS } from '@/constants/links'
import { useBookList } from '@/hooks/useBookList'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function Page() {
  const { data, loading } = useBookList()

  return (
    <>
      <Header title="All books">
        <Button component={Link} href={LINKS.newBook} startIcon={<FontAwesomeIcon icon={faPlus} />}>
          Add a new book
        </Button>
      </Header>
      {loading ? <BookListLoader /> : <BookList data={data} />}
    </>
  )
}
