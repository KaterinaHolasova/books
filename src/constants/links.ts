export const LINKS = {
  root: '/',
  books: '/books',
  editBook: (id: string) => `/books/edit/${id}`,
  newBook: '/books/new',
  booksCategory: (id: string) => `/books/${id}`,
  bookDetail: (id: string, categoryId: string) => `/books/${categoryId}/${id}`,
}
