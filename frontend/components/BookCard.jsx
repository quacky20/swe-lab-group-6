import React from 'react'

function BookCard({ details }) {
    return (
        <div className='bg-white w-80 px-5 py-5 text-purple-900 rounded-lg font-lexend shadow-lg shadow-purple-700/60 flex flex-col gap-2 justify-between hover:scale-105 duration-300 transition-all cursor-pointer border-2 border-purple-200'>
            <div className='text-2xl line-clamp-2'>
                {details.title}
            </div>
            <div className='text-sm line-clamp-2 text-purple-500'>
                {(details.authors?.length > 1) ? `${details.authors[0]}, ${details.authors[1]} ${(details.authors.length > 2) ? `+ ${details.authors.length - 2}` : ''}` : `${details.authors[0]}`}
            </div>
            <div className='flex justify-between'>
                <div>
                    {details.subject}
                </div>
                <div className='text-purple-500'>
                    {details.year}
                </div>
            </div>
        </div>
    )
}

export default BookCard