import { Container } from '@mui/material'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Navigation } from '@/components/Navigation'
import { AppProviders } from '@/components/AppProviders'

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
        <AppProviders>
          <Navigation />
          <Container component="main" sx={{ py: { xs: 3, sm: 4, lg: 6 } }}>
            {children}
          </Container>
        </AppProviders>
      </body>
    </html>
  )
}
