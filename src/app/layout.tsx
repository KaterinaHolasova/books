import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'Books',
    template: '%s | Books',
  },
  description: 'Book Store',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
