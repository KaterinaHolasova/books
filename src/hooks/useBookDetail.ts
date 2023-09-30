'use client'
import { useCallback, useEffect, useState } from 'react'
import { Book } from '@/types/book'

export function useBookDetail(id: string) {
  const [data, setData] = useState<Book>()

  const init = useCallback(async () => {
    setData(
      await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/books/${id}`).then((res) => res.json())
    )
  }, [id])

  useEffect(() => {
    init()
  }, [init])

  return { data }
}
