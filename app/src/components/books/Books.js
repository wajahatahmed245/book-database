import { useEffect, useState } from 'react'

import { Heading } from '../layout/Heading'
import { fetchBooks } from '../../shared/http'
import { BooksTable } from './BooksTable'

export const Books = () => {

  const [books, setBooks] = useState([])

  const getBooks = () => {
    fetchBooks()
      .then(res => res.json())
      .then(res => setBooks(
        res.map(book => (
          { ...book, key: book.id }
        ))
      ))
  }

  useEffect(() => getBooks(), [])

  return (
    <>
      <Heading
        title="Books"
        link="/books/new"
        linkText="Add Book"
      />
      <BooksTable books={books} handleBookDelete={() => getBooks()} />
    </>
  )

}
