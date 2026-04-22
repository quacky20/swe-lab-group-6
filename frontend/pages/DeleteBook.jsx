import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { FaArrowLeft } from 'react-icons/fa'

function DeleteBook() {
    const navigate = useNavigate()
    const [searchIsbn, setSearchIsbn] = useState('')
    const [bookData, setBookData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { token } = useContext(AuthContext)

    const handleSearchChange = (e) => {
        setSearchIsbn(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchIsbn.trim()) {
            setError('Please enter an ISBN.')
            return
        }

        setError('')
        setSuccess('')
        setLoading(true)

        try {
            const response = await axios.get(
                `http://localhost:4000/api/v1/books/${searchIsbn.trim()}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setBookData(response.data.book)
        } catch (err) {
            const message = err?.response?.data?.message || 'Book not found.'
            setError(message)
            setBookData(null)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!bookData) return

        setDeleting(true)
        setError('')
        setSuccess('')

        try {
            await axios.delete(
                `http://localhost:4000/api/v1/books/${bookData.isbn}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setSuccess('Book deleted successfully.')
            setTimeout(() => navigate('/admin'), 1500)
        } catch (err) {
            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                'Failed to delete book.'
            setError(message)
        } finally {
            setDeleting(false)
        }
    }

    return (
        <div className='min-h-screen p-5 flex items-start justify-center'>
            <div className='w-full max-w-2xl bg-white/80 rounded-xl shadow-lg shadow-purple-700/60 border-2 border-purple-200 p-6 md:p-8 font-lexend mt-4 mb-10'>
                <div className='flex items-center gap-3 mb-6'>
                    <button
                        onClick={() => navigate('/admin')}
                        className='flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors'
                    >
                        <FaArrowLeft />
                        Back
                    </button>
                    <div>
                        <h1 className='text-3xl font-bold text-purple-900'>Delete Book</h1>
                        <p className='text-purple-700 mt-1'>Remove a book from the catalog by ISBN.</p>
                    </div>
                </div>

                {error ? (
                    <div className='mb-4 rounded-lg border border-red-300 bg-red-50 text-red-700 px-4 py-3'>
                        {error}
                    </div>
                ) : null}

                {success ? (
                    <div className='mb-4 rounded-lg border border-green-300 bg-green-50 text-green-700 px-4 py-3'>
                        {success}
                    </div>
                ) : null}

                {!bookData ? (
                    <form onSubmit={handleSearch} className='space-y-4'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-purple-900 font-medium'>ISBN</label>
                            <div className='flex gap-3'>
                                <input
                                    type='text'
                                    value={searchIsbn}
                                    onChange={handleSearchChange}
                                    placeholder='Enter ISBN to search'
                                    className='flex-1 border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300'
                                />
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='bg-linear-to-br from-purple-300 to-violet-300 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 disabled:opacity-70'
                                >
                                    {loading ? 'Searching...' : 'Search'}
                                </button>
                            </div>
                        </div>
                    </form>
                ) : null}

                {bookData ? (
                    <div className='space-y-4'>
                        <div className='bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4'>
                            <p className='text-yellow-800 font-medium'>⚠️ Warning: This action cannot be undone.</p>
                        </div>

                        <div className='space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200'>
                            <div>
                                <label className='text-purple-900 font-medium'>ISBN</label>
                                <p className='text-gray-700'>{bookData.isbn}</p>
                            </div>
                            <div>
                                <label className='text-purple-900 font-medium'>Title</label>
                                <p className='text-gray-700'>{bookData.title}</p>
                            </div>
                            <div>
                                <label className='text-purple-900 font-medium'>Authors</label>
                                <p className='text-gray-700'>{bookData.authors.join(', ')}</p>
                            </div>
                            <div>
                                <label className='text-purple-900 font-medium'>Subject</label>
                                <p className='text-gray-700'>{bookData.subject}</p>
                            </div>
                            <div>
                                <label className='text-purple-900 font-medium'>Year</label>
                                <p className='text-gray-700'>{bookData.year}</p>
                            </div>
                        </div>

                        <div className='pt-4 flex gap-3'>
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className='bg-linear-to-br from-purple-300 to-violet-300 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 disabled:opacity-70'
                            >
                                {deleting ? 'Deleting...' : 'Confirm Delete'}
                            </button>
                            <button
                                onClick={() => { setBookData(null); setSearchIsbn(''); }}
                                className='bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default DeleteBook