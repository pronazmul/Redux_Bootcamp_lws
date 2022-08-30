import React from 'react'

const Error = ({ error }) => {
  return (
    <div className=' bg-blue-600 p-4 w-3/4 mx-auto rounded-lg text-white text-sm font-semibold flex justify-center '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        className='w-4 mx-2 stroke-current'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        ></path>
      </svg>
      {error}
    </div>
  )
}

export default Error
