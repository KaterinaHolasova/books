import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

export function useIsAdmin() {
  const pathname = usePathname()

  return {
    isAdmin: pathname.split('/')[1] === 'admin',
  }
}
