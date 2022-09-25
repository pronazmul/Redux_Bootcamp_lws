import React from 'react'
import Logo from '../../assets/logo.png'

const ChatButton = () => {
  return (
    <a
      className='fixed bottom-0 right-0 flex items-center justify-center h-8 pl-1 pr-2 mb-6 mr-4 text-blue-100 bg-indigo-600 rounded-full shadow-lg hover:bg-blue-600'
      href='https://learnwithsumit.com'
      target='_top'
    >
      <div className='flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full'>
        <img src={Logo} alt='LWS Logo' />
      </div>
      <span className='ml-1 text-sm leading-none'>Learn with Sumit</span>
    </a>
  )
}

export default ChatButton
