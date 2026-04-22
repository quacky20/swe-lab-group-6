import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='h-60 flex flex-col py-10 items-center text-white font-lexend justify-center gap-10 bg-linear-to-t from-purple-400'>
            <div className='text-white flex flex-col justify-center items-center'>
                <div className='text-2xl font-bold'><span className='text-purple-500'>Lib</span>Search</div>
                <div>Unified search engine and library catalogue</div>
            </div>
            <ul className='flex gap-5 text-xl'>
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
            </ul>
        </div>
    )
}

export default Footer