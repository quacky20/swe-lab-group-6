import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function DropdownButton({ children, open, toggle }) {
    return (
        <div onClick={toggle} className={`flex items-center w-fit p-2 bg-white rounded-md hover:cursor-pointer border border-purple-200 ${open ? 'shadow-purple-200 shadow-md' : ''} transition-all duration-300`}>
            {children}
            <span className='flex items-center justify-center ml-4'><FaChevronDown className={`${open ? '-rotate-180' : ''} transition-all duration-300`} /></span>
        </div>
    )
}

export default DropdownButton