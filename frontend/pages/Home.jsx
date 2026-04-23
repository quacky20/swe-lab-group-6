import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import BookCard from '../components/BookCard'
import axios from 'axios';
import BookList from '../components/BookList';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Home() {
    const [results, setResults] = useState([])
    const [listView, setListView] = useState(true)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [searchParams, setSearchParams] = useState('')

    const handleSearch = (params) => {
        setSearchParams(params)
        setPage(1) 
    }

    useEffect(() => {
        if (!searchParams) return
        
        const q = "http://localhost:4000/api/v1/search?q=" + searchParams + "&page=" + page
        axios
            .get(q)
            .then((response) => {
                setResults(response.data.results)
                setTotal(response.data.totalCount)
                const max = Math.ceil(response.data.totalCount / 12)
                setMaxPage(max)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [searchParams, page])

    const changeView = () => {
        setListView((prev) => !prev)
    }

    return (
        <div className='min-h-screen p-5 flex flex-col items-center'>
            <Search onSearch={(params) => handleSearch(params)} onViewChange={changeView} page={page} />
            {results.length > 0 ? (
                <div className='w-full bg-white rounded-lg py-3 px-5 shadow-lg shadow-purple-700/60 border-2 border-purple-200 font-lexend flex items-center justify-center text-purple-900 mt-10'>
                    <div className='grow'>
                        Showing results {(page - 1) * 12 + 1} - {page === maxPage ? (total) : ((page) * 12)} of {total}
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <div
                            className={`${page === 1 ? 'cursor-auto text-purple-400' : 'hover:cursor-pointer'}`}
                            onClick={() => {
                                if (page !== 1) setPage((prev) => prev - 1)
                            }}
                        >
                            <FaChevronLeft />
                        </div>
                        <div className={`h-8 w-8 flex items-center justify-center border-2 border-purple-200 rounded-md`}>{page}</div>
                        <div
                            className={`${page === maxPage ? 'cursor-auto text-purple-400' : 'hover:cursor-pointer'}`}
                            onClick={() => {
                                if (page !== maxPage) setPage((prev) => prev + 1)
                            }}
                        >
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {listView && results.length > 0 ? (
                <div className='bg-white/60 rounded-lg w-full mt-5 mb-10 flex flex-col gap-5 items-center justify-center p-5 shadow-lg shadow-purple-700/60 border-2 border-purple-200'>
                    {results.map((item, idx) => (
                        <BookList details={item} key={idx} />
                    ))}
                </div>
            ) : (
                <div className='mt-5 mb-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {results.map((item, idx) => (
                        <BookCard details={item} key={idx} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default Home