import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import AddBook from '../pages/AddBook'
import EditBook from '../pages/EditBook'
import DeleteBook from '../pages/DeleteBook'
import LoginAdmin from '../pages/LoginAdmin'
import BookDetails from '../pages/BookDetails'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProtectedRoute from '../components/ProtectedRoute'

function App() {
  return (
    <div className='flex flex-col bg-linear-to-br from-purple-300 to-violet-300 h-fit'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/add'
          element={
            <ProtectedRoute>
              <AddBook />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/edit'
          element={
            <ProtectedRoute>
              <EditBook />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/delete'
          element={
            <ProtectedRoute>
              <DeleteBook />
            </ProtectedRoute>
          }
        />
        <Route path='/:bookId' element={<BookDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App