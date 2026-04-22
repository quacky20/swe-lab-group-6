import React from 'react'

function DropdownContent({ children, open }) {
    return (
        <div
            className={`absolute min-w-full flex flex-col items-center p-3 mt-2 bg-white rounded-md shadow-black/20 shadow-lg max-h-[40vh] overflow-y-scroll ${open ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-[5%]'} transition-all duration-300`}
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}
        >
            {children}
        </div>
    )
}

export default DropdownContent