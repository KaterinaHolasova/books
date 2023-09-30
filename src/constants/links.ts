export const LINKS = {
  root: '/',
  books: '/books',
  booksCategory: (id: string) => `/books/${id}`,
  bookDetail: (id: string, categoryId: string) => `/books/${categoryId}/${id}`,
  editBook: (id: string) => `/books/edit/${id}`,
  newBook: '/books/new',
  newBookInCategory: (id: string) => `/books/new?category=${id}`,
}
