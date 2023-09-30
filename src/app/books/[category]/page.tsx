'use client'
import { BookList } from '@/components/BookList'
import { BookListLoader } from '@/components/BookListLoader'
import { Header } from '@/components/Header'
import { CATEGORY_LABEL_MAP } from '@/constants/categoryLabelMap'
import { LINKS } from '@/constants/links'
import { useBookList } from '@/hooks/useBookList'
import { Category } from '@/types/book'
import { faBookmark, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button } from '@mui/material'
import Error from 'next/error'
import Link from 'next/link'

export default function Page({ params }: { params: { category: Category } }) {
  const { data, loading } = useBookList()
  const categoryExists = Object.values(Category).includes(params.category)

  if (!categoryExists) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Header
        title={
          <>
            <Box component="span" mr={2}>
              <FontAwesomeIcon icon={faBookmark} />
            </Box>
            {CATEGORY_LABEL_MAP[params.category]}
          </>
        }
      >
        <Button
          component={Link}
          href={LINKS.books}
          startIcon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="outlined"
        >
          Show all books
        </Button>
        <Button
          component={Link}
          href={LINKS.newBookInCategory(params.category)}
          startIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          Add a new book
        </Button>
      </Header>
      {loading ? (
        <BookListLoader />
      ) : (
        <BookList data={data.filter((item) => item.category == params.category)} />
      )}
    </>
  )
}
