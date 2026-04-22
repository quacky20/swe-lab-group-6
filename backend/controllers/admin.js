const Admin = require('../models/admin')
const asyncWrapper = require('../middleware/async')
const jwt = require('jsonwebtoken')

const loginAdmin = asyncWrapper(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  const admin = await Admin.findOne({ email }).select('+password')

  if (!admin) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const isMatch = await admin.matchPassword(password)

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const token = jwt.sign(
    { id: admin._id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: '6h' }
  )

  res.status(200).json({ token, admin: { id: admin._id, email: admin.email } })
})

module.exports = { loginAdmin }