import { CoverImage } from '@/types/book'
import { ReactNode } from 'react'

export type BookLayoutProps = {
  children: ReactNode
  coverImage?: CoverImage
  coverImagePlaceholder?: ReactNode
}
