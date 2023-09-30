'use client'
import { SnackbarProvider } from 'notistack'
import { AppProvidersProps } from './types'
import { ThemeRegistry } from './components/ThemeRegistry'

export function AppProviders(props: AppProvidersProps) {
  const { children } = props

  return (
    <ThemeRegistry>
      <SnackbarProvider autoHideDuration={4000}>{children}</SnackbarProvider>
    </ThemeRegistry>
  )
}
