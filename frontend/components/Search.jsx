import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import { FaListUl, FaSearch } from 'react-icons/fa'
import { BsGrid } from "react-icons/bs";
import { FaRegCircleXmark } from "react-icons/fa6";

const items = ['All', 'Books', 'Authors']

function Search({ onSearch, onViewChange, page }) {
    const currentYear = new Date().getFullYear()

    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState('All')
    const [subject, setSubject] = useState('')
    const [year, setYear] = useState('')
    const [view, setView] = useState('list')

    const handleReset = () => {
        setFilter('All')
        setSubject('')
        setYear('')
    }

    const handleSearch = () => {
        if (query.length < 3) {
            throw new Error('Enter 3 characters!')
        }
        const params = query + "&filter=" + filter + "&subject=" + subject + "&year=" + String(year)
        onSearch(params)
    }

    useEffect(() => {
        if (query.length >= 3) handleSearch()
    }, [page])

    return (
        <div className='flex flex-col gap-2 bg-white w-fit px-5 py-4 rounded-xl shadow-black/30 shadow-lg font-lexend z-10'>
            <div className='flex gap-3'>
                <div className='grow p-2 border border-purple-200 rounded-lg flex items-center gap-2'>
                    <FaSearch />
                    <input
                        type="text"
                        className='focus:outline-0 focus:ring-0 grow'
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
                <button
                    className='bg-linear-to-br from-purple-300 to-violet-300 p-2 rounded-lg text-white hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 cursor-pointer active:shadow-sm'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='flex gap-2'>
                    <Dropdown
                        buttonText="Filter"
                        content={
                            <>
                                {
                                    items.map((item, idx) =>
                                        <DropdownItem
                                            key={idx}
                                            onClick={() => {
                                                setFilter(item)
                                            }}
                                            className={filter === item ? 'bg-purple-200/70' : ''}
                                        >
                                            {item}
                                        </DropdownItem>)
                                }
                            </>
                        }
                    />
                    <Dropdown buttonText="Subject" content={<>
                        {
                            <div>
                                <div className='grow p-2 border border-purple-200 rounded-lg flex items-center gap-2'>
                                    <FaSearch />
                                    <input
                                        type="text"
                                        value={subject}
                                        className='focus:outline-0 focus:ring-0 grow'
                                        onChange={e => setSubject(e.target.value)}
                                    />
                                </div>
                            </div>
                        }
                    </>} />
                    <Dropdown buttonText="Year" content={<>
                        {
                            <div>
                                <div className='grow p-2 border border-purple-200 rounded-lg flex items-center gap-2 has-out-of-range:border-red-300'>
                                    <FaSearch />
                                    <input
                                        type="number"
                                        min={1000}
                                        max={currentYear}
                                        value={year}
                                        className='focus:outline-0 focus:ring-0 grow out-of-range:text-red-500'
                                        onChange={e => setYear(e.target.value)}
                                    />
                                </div>
                            </div>
                        }
                    </>} />
                </div>
                <div
                    className='flex items-center gap-1 mr-6 cursor-pointer hover:bg-purple-200/70 p-2 rounded-md transition-all duration-300'
                    onClick={handleReset}
                >
                    <FaRegCircleXmark />
                    <span>Reset Filter</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <div
                        className={`p-2 hover:bg-purple-200/70 transition-all duration-300 rounded-md ${view === 'list' ? 'bg-purple-200/70' : ''}`}
                        onClick={() => {
                            if (view !== 'list') {
                                onViewChange()
                                setView('list')
                            }
                        }}
                    >
                        <FaListUl />
                    </div>
                    <div
                        className={`p-2 hover:bg-purple-200/70 transition-all duration-300 rounded-md ${view === 'grid' ? 'bg-purple-200/70' : ''}`}
                        onClick={() => {
                            if (view !== 'grid') {
                                onViewChange()
                                setView('grid')
                            }
                        }}
                    >
                        <BsGrid />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search