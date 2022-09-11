import React from 'react'
import Navbar from './Navbar'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='grid place-items-center bg-blue-100 h-screen px-6 font-sans'>
        <Navbar />
        <div className='space-y-2'>
          <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
