import React from 'react'

const Loading = () => {
  return (
    <div className=' w-full flex justify-center items-center'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600'></div>
    </div>
  )
}

export default Loading
