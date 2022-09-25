import React from 'react'

const TeamHeader = () => {
  return (
    <div className='px-10 mt-6 flex justify-between'>
      <h1 className='text-2xl font-bold'>Teams</h1>
      <button className='flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100'>
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default TeamHeader
