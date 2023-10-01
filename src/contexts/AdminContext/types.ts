import { ReactNode } from 'react'

export type AdminContextProviderProps = {
  children: ReactNode
}

export type AdminContextValue = {
  isAdmin: boolean
  toggleIsAdmin: () => void
}
