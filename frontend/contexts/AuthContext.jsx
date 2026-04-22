import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null)
    const [admin, setAdmin] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const savedToken = localStorage.getItem('adminToken')
        const savedAdmin = localStorage.getItem('admin')

        if (savedToken && savedAdmin) {
            setToken(savedToken)
            setAdmin(JSON.parse(savedAdmin))
        }
        setLoading(false)
    }, [])

    const login = (token, admin) => {
        setToken(token)
        setAdmin(admin)
        localStorage.setItem('adminToken', token)
        localStorage.setItem('admin', JSON.stringify(admin))
    }

    const logout = () => {
        setToken(null)
        setAdmin(null)
        localStorage.removeItem('adminToken')
        localStorage.removeItem('admin')
    }

    return (
        <AuthContext.Provider value={{ token, admin, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}