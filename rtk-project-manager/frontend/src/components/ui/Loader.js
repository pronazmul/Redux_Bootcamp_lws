import React from 'react'

const Loader = ({ content }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-[60vh] space-y-3`}
    >
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600'></div>
      {content && (
        <p className='text-gray-600 text-lg font-medium'>{content}</p>
      )}
    </div>
  )
}

export default Loader
