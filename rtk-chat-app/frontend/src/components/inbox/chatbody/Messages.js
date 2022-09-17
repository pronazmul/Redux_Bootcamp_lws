import React from 'react'
import Message from './Message'
import { useSelector } from 'react-redux'

export default function Messages({ messages: data }) {
  const {
    user: { email },
  } = useSelector((state) => state.auth)
  const messages = data.slice().sort((a, b) => a.timestamp - b.timestamp)

  return (
    <div className='relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse'>
      <ul className='space-y-2'>
        {messages.map((msg) => (
          <Message
            key={msg.id}
            justify={
              msg?.sender?.email !== email ? 'justify-start' : 'justify-end'
            }
            message={msg.message}
          />
        ))}
      </ul>
    </div>
  )
}
