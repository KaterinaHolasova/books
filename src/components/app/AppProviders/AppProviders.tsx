'use client'
import { SnackbarProvider } from 'notistack'
import { AppProvidersProps } from './types'
import { AdminContextProvider } from '@/contexts/AdminContext/AdminContextProvider'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/theme'
import { CssBaseline } from '@mui/material'

export function AppProviders(props: AppProvidersProps) {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider autoHideDuration={4000}>
        <AdminContextProvider>
          <CssBaseline />
          {children}
        </AdminContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
