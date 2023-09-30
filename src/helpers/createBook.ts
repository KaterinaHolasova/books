'use client'
import { API_URL } from '@/constants/apiUrl'
import { Book } from '@/types/book'

export function createBook(data: Omit<Book, '_id'>) {
  return fetch(API_URL.bookList, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(data),
  })
}
