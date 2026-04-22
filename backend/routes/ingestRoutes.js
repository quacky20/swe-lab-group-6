const express = require('express')
const router = express.Router()

const ingestData = require('../controllers/ingestData')

router.route('/ingest').get(ingestData)

module.exports = router