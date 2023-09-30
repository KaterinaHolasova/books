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
import { CategoryDetailPageProps } from './types'

export function CategoryDetailPage(props: CategoryDetailPageProps) {
  const { category } = props
  const { data, isLoading } = useBookList()
  const categoryNotFound = !Object.values(Category).includes(category)

  if (categoryNotFound) return <Error statusCode={404} />

  return (
    <>
      <Header
        title={
          <>
            <Box component="span" mr={2}>
              <FontAwesomeIcon icon={faBookmark} />
            </Box>
            {CATEGORY_LABEL_MAP[category]}
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
          href={LINKS.newBookInCategory(category)}
          startIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          Add a new book
        </Button>
      </Header>
      {data && <BookList data={data.filter((item) => item.category == category)} />}
      {isLoading && <BookListLoader />}
    </>
  )
}
