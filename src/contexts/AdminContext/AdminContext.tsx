import { createContext } from 'react'
import { AdminContextValue } from './types'

export const AdminContext = createContext<AdminContextValue>({
  isAdmin: true,
  toggleIsAdmin: () => {
    throw new Error('AdminContext is not initialized')
  },
})
