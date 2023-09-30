export const API_URL = {
  bookDetail: (id: string) => `${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/${id}`,
}
