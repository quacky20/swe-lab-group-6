import React from 'react'
import { useNavigate } from 'react-router'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'

function Admin() {
  const navigate = useNavigate()

  const options = [
    {
      title: 'Add Book',
      description: 'Add a new book to the library catalog.',
      icon: FaPlus,
      color: 'bg-purple-100 text-purple-700 border-purple-300',
      buttonColor: 'from-purple-300 to-violet-300',
      path: '/admin/add'
    },
    {
      title: 'Edit Book',
      description: 'Update an existing book by ISBN.',
      icon: FaEdit,
      color: 'bg-purple-100 text-purple-700 border-purple-300',
      buttonColor: 'from-purple-300 to-violet-300',
      path: '/admin/edit'
    },
    {
      title: 'Delete Book',
      description: 'Remove a book from the catalog by ISBN.',
      icon: FaTrash,
      color: 'bg-purple-100 text-purple-700 border-purple-300',
      buttonColor: 'from-purple-300 to-violet-300',
      path: '/admin/delete'
    }
  ]

  return (
    <div className='min-h-screen p-5 flex flex-col items-center'>
      <div className='w-full max-w-4xl'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white font-lexend mb-2'>Admin Panel</h1>
          <p className='text-white/80 font-lexend'>Manage your library catalog</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          {options.map((option, idx) => {
            const Icon = option.icon
            return (
              <div
                key={idx}
                className='bg-white/80 rounded-xl shadow-lg shadow-purple-700/60 border-2 border-purple-200 p-6 font-lexend hover:shadow-xl hover:shadow-purple-700/80 transition-all duration-300 cursor-pointer flex flex-col justify-between'
                onClick={() => navigate(option.path)}
              >
                <div>
                  <div className={`${option.color} border-2 rounded-lg p-4 w-fit mb-4`}>
                    <Icon className='text-2xl' />
                  </div>
                  <h2 className='text-xl font-bold text-purple-900 mb-2'>{option.title}</h2>
                  <p className='text-purple-700 text-sm mb-4'>{option.description}</p>
                </div>
                <button
                  className={`bg-linear-to-br ${option.buttonColor} text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-300 transition-all duration-300`}
                >
                  Open
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Admin