'use client'
import { BookList } from '@/components/book/BookList'
import { BookListLoader } from '@/components/book/BookListLoader'
import { Header } from '@/components/layout/Header'
import { CATEGORY_LABEL_MAP } from '@/constants/categoryLabelMap'
import { LINKS } from '@/constants/links'
import { useBookList } from '@/hooks/useBookList'
import { Category } from '@/types/book'
import { faBookmark, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Theme, useMediaQuery } from '@mui/material'
import Error from 'next/error'
import Link from 'next/link'
import { CategoryDetailPageProps } from './types'
import { useContext } from 'react'
import { AdminContext } from '@/contexts/AdminContext/AdminContext'

export function CategoryDetailPage(props: CategoryDetailPageProps) {
  const { category } = props
  const { data, isLoading } = useBookList()
  const { isAdmin } = useContext(AdminContext)
  const isTabletOrDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

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
          {isTabletOrDesktop ? 'Show all books' : 'Show all'}
        </Button>
        {isAdmin && (
          <Button
            component={Link}
            href={LINKS.newBookInCategory(category)}
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            {isTabletOrDesktop ? 'Add a new book' : 'Add'}
          </Button>
        )}
      </Header>
      {isLoading && <BookListLoader />}
      {data && <BookList data={data.filter((item) => item.category == category)} />}
    </>
  )
}
