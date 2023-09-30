'use client'
import { Book } from '@/types/book'

export function createBook(data: Omit<Book, '_id'>) {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/books`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(data),
  })
}
