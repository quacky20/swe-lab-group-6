const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middleware/auth')

const {
    getAllBooks,
    getBookByIsbn,
    addNewBook,
    updateBook,
    deleteBook
} = require('../controllers/books')

router.route('/books').get(getAllBooks).post(verifyToken, addNewBook)
router.route('/books/:isbn').get(getBookByIsbn).put(verifyToken, updateBook).delete(verifyToken, deleteBook)

module.exports = router