import React from 'react'

const AuthLoader = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600'></div>
      <p className='text-gray-600 text-lg font-medium'>
        Authentication Checking
      </p>
    </div>
  )
}

export default AuthLoader
