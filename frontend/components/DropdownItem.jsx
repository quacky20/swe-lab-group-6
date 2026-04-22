import React from 'react'

function DropdownItem({ children, onClick, className }) {
    return (
        <div
            className={`p-2 m-0.5 w-full rounded-md cursor-pointer hover:bg-purple-200 transition-all duration-150 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default DropdownItem