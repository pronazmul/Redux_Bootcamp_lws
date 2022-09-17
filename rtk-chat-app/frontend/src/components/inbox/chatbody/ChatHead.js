import { useSelector } from 'react-redux'
import React from 'react'
import gravatarUrl from 'gravatar-url'

export default function ChatHead({ message }) {
  const {
    user: { email },
  } = useSelector((state) => state.auth)

  const { receiver, sender } = message
  let partnerEmail = sender.email === email ? receiver.email : sender.email
  let partnerName = sender.email === email ? receiver.name : sender.name

  return (
    <div className='relative flex items-center p-3 border-b border-gray-300'>
      <img
        className='object-cover w-10 h-10 rounded-full'
        src={gravatarUrl(partnerEmail, { size: 80 })}
        alt={partnerName}
      />
      <span className='block ml-2 font-bold text-gray-600'>{partnerName}</span>
    </div>
  )
}
