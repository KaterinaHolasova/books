import { AdminContextProviderProps } from './types'
import { AdminContext } from './AdminContext'
import { useState } from 'react'

export function AdminContextProvider(props: AdminContextProviderProps) {
  const { children } = props
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <AdminContext.Provider value={{ isAdmin, toggleIsAdmin: () => setIsAdmin(!isAdmin) }}>
      {children}
    </AdminContext.Provider>
  )
}
