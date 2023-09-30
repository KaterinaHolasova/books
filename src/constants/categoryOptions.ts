import { Category, CoverImage } from '@/types/book'

export const CATEGORY_OPTIONS: { label: string; value: Category }[] = [
  { label: 'Crime', value: Category.Crime },
  { label: 'Fantasy', value: Category.Fantasy },
  { label: 'Fiction', value: Category.Fiction },
  { label: 'Horror', value: Category.Horror },
  { label: 'Non-Fiction', value: Category.NonFiction },
  { label: 'Science Fiction', value: Category.ScienceFiction },
]
