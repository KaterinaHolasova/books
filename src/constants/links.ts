export const LINKS = {
  root: '/',
  books: '/books',
  newBook: '/books/new',
  bookDetail: (id: string, category: string) => `/books/${category}/${id}`,
}
