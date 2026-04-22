const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const Admin = require('../models/admin')

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        const existingAdmin = await Admin.findOne({ email: 'admin@example.com' })

        if (existingAdmin) {
            console.log('Admin already exists. Skipping...')
            process.exit(0)
        }

        const admin = await Admin.create({
            email: 'admin@example.com',
            password: 'password123'
        })

        console.log('Admin created successfully!')
        console.log('Email:', admin.email)
        console.log('Password: password123')

        process.exit(0)
    } catch (error) {
        console.error('Error seeding admin:', error)
        process.exit(1)
    }
}

seedAdmin()