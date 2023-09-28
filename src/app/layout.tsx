import { ThemeRegistry } from '@/components/ThemeRegistry'
import { Container } from '@mui/material'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Header } from '@/components/Header'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
        <ThemeRegistry>
          <Header />
          <Container>{children}</Container>
        </ThemeRegistry>
      </body>
    </html>
  )
}
