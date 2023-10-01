import { Category } from '@/types/book'

export const CATEGORY_LABEL_MAP: Record<Category, string> = {
  [Category.Crime]: 'Crime',
  [Category.Fantasy]: 'Fantasy',
  [Category.Fiction]: 'Fiction',
  [Category.Horror]: 'Horror',
  [Category.NonFiction]: 'Non-Fiction',
  [Category.ScienceFiction]: 'Science Fiction',
}
