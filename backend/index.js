const express = require('express')
const cors = require('cors')
const bookRoutes = require('./routes/bookRoutes')
const adminRoutes = require('./routes/adminRoutes')
const ingestRoutes = require('./routes/ingestRoutes')
const searchRoutes = require('./routes/searchRoutes')
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_URL }))

app.get('/test', (req, res) => {
    res.send("Hello world")
})

// routes
app.use('/api/v1/', bookRoutes)
app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/', ingestRoutes)
app.use('/api/v1/', searchRoutes)

const port = 4000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start()