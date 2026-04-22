const Book = require('../models/book')
const asyncWrapper = require('../middleware/async')
const booksToInsert = require('../books')

const ingestData = asyncWrapper(async (req, res) => {
    await Book.insertMany(booksToInsert)
    res.status(201).json({ success: true })
})

module.exports = ingestData