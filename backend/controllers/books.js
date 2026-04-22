const Book = require('../models/book')
const asyncWrapper = require('../middleware/async')

const getAllBooks = asyncWrapper(async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 })
  res.status(200).json({ books })
})

const getBookByIsbn = asyncWrapper(async (req, res) => {
  const { isbn } = req.params
  const book = await Book.findOne({ isbn })

  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }

  res.status(200).json({ book })
})

const addNewBook = asyncWrapper(async (req, res) => {
  const { isbn, title, authors, subject, description, year, url } = req.body

  const parsedAuthors = Array.isArray(authors)
    ? authors.map((a) => String(a).trim()).filter(Boolean)
    : []

  if (!isbn || !title || !subject || !year || parsedAuthors.length === 0) {
    return res.status(400).json({
      message: 'isbn, title, authors, subject, and year are required'
    })
  }

  const yearNum = Number(year)
  const currentYear = new Date().getFullYear()

  if (!Number.isInteger(yearNum) || yearNum < 1000 || yearNum > currentYear) {
    return res.status(400).json({ message: 'Invalid publication year' })
  }

  try {
    const newBook = await Book.create({
      isbn: String(isbn).trim(),
      title: String(title).trim(),
      authors: parsedAuthors,
      subject: String(subject).trim(),
      description: description ? String(description).trim() : undefined,
      year: yearNum,
      url: url ? String(url).trim() : undefined
    })

    res.status(201).json({ newBook })
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ message: 'A book with this ISBN already exists' })
    }

    throw error
  }
})

const updateBook = asyncWrapper(async (req, res) => {
  const { isbn } = req.params
  const { title, authors, subject, description, year, url } = req.body

  const book = await Book.findOne({ isbn })

  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }

  const parsedAuthors = Array.isArray(authors)
    ? authors.map((a) => String(a).trim()).filter(Boolean)
    : []

  if (!title || !subject || !year || parsedAuthors.length === 0) {
    return res.status(400).json({
      message: 'title, authors, subject, and year are required'
    })
  }

  const yearNum = Number(year)
  const currentYear = new Date().getFullYear()

  if (!Number.isInteger(yearNum) || yearNum < 1000 || yearNum > currentYear) {
    return res.status(400).json({ message: 'Invalid publication year' })
  }

  book.title = String(title).trim()
  book.authors = parsedAuthors
  book.subject = String(subject).trim()
  book.description = description ? String(description).trim() : undefined
  book.year = yearNum
  book.url = url ? String(url).trim() : undefined

  await book.save()

  res.status(200).json({ book })
})

const deleteBook = asyncWrapper(async (req, res) => {
  const { isbn } = req.params

  const book = await Book.findOneAndDelete({ isbn })

  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }

  res.status(200).json({ message: 'Book deleted successfully' })
})

module.exports = {
  getAllBooks,
  getBookByIsbn,
  addNewBook,
  updateBook,
  deleteBook
}