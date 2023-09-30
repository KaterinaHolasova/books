export const LINKS = {
  root: '/',
  books: '/books',
  editBook: (id: string) => `/books/edit/${id}`,
  newBook: '/books/new',
  bookDetail: (id: string, category: string) => `/books/${category}/${id}`,
}
