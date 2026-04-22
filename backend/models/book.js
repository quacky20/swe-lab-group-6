const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: [true, 'ISBN is required'],
        trim: true,
        unique: true
    },
    title: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    authors: [{
        type: String,
        required: [true, 'Author name is required']
    }],
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: [250, 'Description cannot be of more than 250 characters']
    },
    year: {
        type: Number,
        required: [true, 'Publication year is required']
    },
    url: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Book', BookSchema)