'use client'
import { SnackbarProvider } from 'notistack'
import { AppProvidersProps } from './types'
import { ThemeRegistry } from './components/ThemeRegistry'
import { AdminContextProvider } from '@/contexts/AdminContext/AdminContextProvider'

export function AppProviders(props: AppProvidersProps) {
  const { children } = props

  return (
    <ThemeRegistry>
      <SnackbarProvider autoHideDuration={4000}>
        <AdminContextProvider>{children}</AdminContextProvider>
      </SnackbarProvider>
    </ThemeRegistry>
  )
}
