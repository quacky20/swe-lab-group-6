import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { FaSignOutAlt } from 'react-icons/fa'

function Header() {
    const { token, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/admin/login')
    }

    return (
        <div className='h-20 flex items-center px-5 justify-between font-lexend'>
            <div className='font-bold text-white text-2xl'>
                <span className='text-purple-500'>Lib</span>Search
            </div>
            <ul className='flex gap-5 text-xl items-center'>
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        ` ${isActive ? 'text-purple-500' : 'text-white'} duration-150 transition-all`
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" className={({ isActive }) =>
                        ` ${isActive ? 'text-purple-500' : 'text-white'} duration-150 transition-all`
                    }>
                        Admin
                    </NavLink>
                </li>
                {token && (
                    <li>
                        <button
                            onClick={handleLogout}
                            className='flex items-center gap-2 text-white hover:text-purple-500 transition-colors duration-150'
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Header