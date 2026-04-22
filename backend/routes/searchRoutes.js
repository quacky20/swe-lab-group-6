const express = require('express')
const router = express.Router()

const {
    searchBooks
} = require('../controllers/search')

router.route('/search').get(searchBooks)

module.exports = router