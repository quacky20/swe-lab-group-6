import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { FaArrowLeft } from 'react-icons/fa'

const initialForm = {
    isbn: '',
    title: '',
    authors: '',
    subject: '',
    description: '',
    year: '',
    url: ''
}

function AddBook() {
    const navigate = useNavigate()
    const [form, setForm] = useState(initialForm)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { token } = useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const authors = form.authors
            .split(',')
            .map((a) => a.trim())
            .filter(Boolean)

        if (authors.length === 0) {
            setError('Please provide at least one author.')
            return
        }

        const payload = {
            isbn: form.isbn.trim(),
            title: form.title.trim(),
            authors,
            subject: form.subject.trim(),
            description: form.description.trim(),
            year: Number(form.year),
            url: form.url.trim()
        }

        setSubmitting(true)
        try {
            await axios.post('http://localhost:4000/api/v1/books', payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setSuccess('Book added successfully.')
            setForm(initialForm)
            setTimeout(() => navigate('/admin'), 1500)
        } catch (err) {
            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                'Failed to add book.'
            setError(message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className='min-h-screen p-5 flex items-start justify-center'>
            <div className='w-full max-w-3xl bg-white/80 rounded-xl shadow-lg shadow-purple-700/60 border-2 border-purple-200 p-6 md:p-8 font-lexend mt-4 mb-10'>
                <div className='flex items-center gap-3 mb-6'>
                    <button
                        onClick={() => navigate('/admin')}
                        className='flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors'
                    >
                        <FaArrowLeft />
                        Back
                    </button>
                    <div>
                        <h1 className='text-3xl font-bold text-purple-900'>Add New Book</h1>
                        <p className='text-purple-700 mt-1'>Add a new book to the library catalog.</p>
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

                <form className='grid grid-cols-1 md:grid-cols-2 gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>ISBN</label>
                        <input name='isbn' value={form.isbn} onChange={handleChange} required className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300' placeholder='9780000000001' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Year</label>
                        <input
                            name='year'
                            type='number'
                            min='1000'
                            max={new Date().getFullYear()}
                            value={form.year}
                            onChange={handleChange}
                            required
                            className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300'
                            placeholder='2024'
                        />
                    </div>

                    <div className='md:col-span-2 flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Title</label>
                        <input name='title' value={form.title} onChange={handleChange} required className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300' placeholder='Book title' />
                    </div>

                    <div className='md:col-span-2 flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Authors</label>
                        <input name='authors' value={form.authors} onChange={handleChange} required className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300' placeholder='Author One, Author Two' />
                        <p className='text-sm text-purple-600'>Use comma-separated author names.</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Subject</label>
                        <input name='subject' value={form.subject} onChange={handleChange} required className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300' placeholder='Computer Science' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Resource URL</label>
                        <input name='url' type='url' value={form.url} onChange={handleChange} className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300' placeholder='https://example.com/book' />
                    </div>

                    <div className='md:col-span-2 flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Description</label>
                        <textarea name='description' value={form.description} onChange={handleChange} maxLength={250} rows={4} className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none' placeholder='Short description (max 250 chars)' />
                    </div>

                    <div className='md:col-span-2 pt-2 flex gap-3'>
                        <button type='submit' disabled={submitting} className='bg-linear-to-br from-purple-300 to-violet-300 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed' >
                            {submitting ? 'Adding...' : 'Add Book'}
                        </button>
                        <button type='button' onClick={() => navigate('/admin')} className='bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBook