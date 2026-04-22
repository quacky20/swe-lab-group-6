import React from 'react'

function BookList({ details }) {
    return (
        <div className='p-5 rounded-md w-full font-lexend shadow-lg shadow-purple-400/30 flex flex-col gap-2 justify-between hover:shadow-xl hover:shadow-purple-700/30 duration-300 transition-all cursor-pointer border border-purple-200 text-purple-900 bg-linear-to-br from-purple-50 to-violet-50'>
            <div className='text-2xl line-clamp-2'>
                {details.title}
            </div>
            <div className='text-sm line-clamp-2'>
                {(details.authors?.length > 1) ? `${details.authors[0]}, ${details.authors[1]} ${(details.authors.length > 2) ? `+ ${details.authors.length - 2}` : ''}` : `${details.authors[0]}`}
            </div>
            <div className='flex justify-between'>
                <div>
                    {details.subject}
                </div>
                <div>
                    {details.year}
                </div>
            </div>
        </div>
    )
}

export default BookList