import { useSelector } from 'react-redux'
import React from 'react'
import { useEditConversationMutation } from '../../../features/conversations/conversationsApi'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Options({ info }) {
  const { id } = useParams()
  const [editConversation, { isSuccess, isError }] =
    useEditConversationMutation()
  const [message, setMessage] = React.useState('')
  const { user: sender } = useSelector((state) => state.auth)

  const { receiver: r, sender: s } = info
  let receiver = r.email === sender.email ? s : r

  function handleSubmit(e) {
    e.preventDefault()
    editConversation({
      id: id,
      senderEmail: sender.email,
      data: {
        participants: `${receiver.email}-${sender.email}`,
        users: [sender, receiver],
        message,
        timestamp: new Date().getTime(),
      },
    })
  }

  React.useEffect(() => {
    if (isError) toast.error('Failed to send Message!')
    if (isSuccess) setMessage('')
  }, [isSuccess, isError])

  return (
    <form
      className='flex items-center justify-between w-full p-3 border-t border-gray-300'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Message'
        className='block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-gray-700'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type='submit'>
        <svg
          className='w-5 h-5 text-gray-500 origin-center transform rotate-90'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
        </svg>
      </button>
    </form>
  )
}
