import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

function LoginAdmin() {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const response = await axios.post('http://localhost:4000/api/v1/admin/login', {
                email,
                password
            })

            login(response.data.token, response.data.admin)
            navigate('/admin')
        } catch (err) {
            const message = err?.response?.data?.message || 'Login failed'
            setError(message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen p-5 flex items-center justify-center'>
            <div className='w-full max-w-md bg-white/80 rounded-xl shadow-lg shadow-purple-700/60 border-2 border-purple-200 p-6 md:p-8 font-lexend'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-purple-900'>Admin Login</h1>
                    <p className='text-purple-700 mt-1'>Sign in to access the admin panel</p>
                </div>

                {error && (
                    <div className='mb-4 rounded-lg border border-red-300 bg-red-50 text-red-700 px-4 py-3'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300'
                            placeholder='admin@example.com'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-purple-900 font-medium'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300'
                            placeholder='••••••'
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full bg-linear-to-br from-purple-300 to-violet-300 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-medium'
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin