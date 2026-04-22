import React, { useEffect, useRef, useState } from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'

function Dropdown({ buttonText, content }) {
    const [open, setOpen] = useState(false)

    const dropdownRef = useRef()

    const toggleDropdown = () => {
        setOpen((prev) => !prev)
    }

    useEffect(() => {
        const handler = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("click", handler)

        return () => {
            document.removeEventListener("click", handler)
        }
    }, [])

    return (
        <div className='relative' ref={dropdownRef}>
            <DropdownButton toggle={toggleDropdown} open={open}>
                {buttonText}
            </DropdownButton>
            <DropdownContent open={open}>
                {content}
            </DropdownContent>
        </div>
    )
}

export default Dropdown