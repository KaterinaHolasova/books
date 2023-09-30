import { useEffect, useState } from 'react'
import { Book } from '@/types/book'

export function useBookList() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Book[]>([])

  const init = async () => {
    setData(
      await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/books`).then((res) => {
        setLoading(false)
        return res.json()
      })
    )
  }

  useEffect(() => {
    init()
  }, [])

  return { data, loading }
}
