import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

function ProtectedRoute({ children }) {
    const { token, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'>Loading...</div>
    }

    if (!token) {
        return <Navigate to='/admin/login' replace />
    }

    return children
}

export default ProtectedRoute