export const LINKS = {
  root: '/',
  books: '/books',
  booksCategory: (id: string) => `/books/${id}`,
  bookDetail: (id: string, categoryId: string) => `/books/${categoryId}/${id}`,
  admin: {
    books: '/admin/books',
    editBook: (id: string) => `/admin/books/edit/${id}`,
    newBook: '/admin/books/new',
    newBookInCategory: (id: string) => `/admin/books/new?category=${id}`,
    booksCategory: (id: string) => `/admin/books/${id}`,
    bookDetail: (id: string, categoryId: string) => `/admin/books/${categoryId}/${id}`,
  },
}
