import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'

function BookDetails() {
  const { isbn } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/books/${isbn}`)
        setBook(response.data.book)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (isbn) fetchBook()
  }, [isbn])

  if (loading) return <div className='p-5'>Loading...</div>
  if (error) return <div className='p-5 text-red-500'>Error: {error}</div>
  if (!book) return <div className='p-5'>Book not found</div>

  return (
    <div className='min-h-[75vh] flex items-center justify-center'>
      <div className='p-5 flex justify-center'>
        <div className='w-full max-w-2xl bg-white rounded-lg p-8 shadow-lg shadow-purple-700/60 border-2 border-purple-200'>
          <h1 className='text-3xl font-bold text-purple-900 mb-4'>{book.title}</h1>

          <div className='space-y-3 text-purple-800'>
            <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
            <p><strong>Subject:</strong> {book.subject}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            {book.description && <p><strong>Description:</strong> {book.description}</p>}
            {book.url && <p><strong>URL:</strong> <a href={book.url} target='_blank' rel='noreferrer' className='text-purple-500 hover:underline'>{book.url}</a></p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails