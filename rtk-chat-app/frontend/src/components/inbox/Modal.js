import TextArea from '../inputs/TextArea'
import Input from './../inputs/Input'
import { useEffect, useState } from 'react'
import debounce from '../../utils/debounce'
import { checkValidEmail } from './../../utils/reguarExpressions'
import { useGetUserQuery } from '../../features/users/usersApi'
import Error from './../ui/Error'
import { useDispatch, useSelector } from 'react-redux'
import {
  conversationsApi,
  useAddConversationMutation,
  useEditConversationMutation,
} from './../../features/conversations/conversationsApi'

export default function Modal({ open, control }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { email: senderEmail } = user
  const [to, setTo] = useState('')
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState(undefined)
  const [error, setError] = useState('')

  const { data: participant } = useGetUserQuery(to, {
    skip: !Boolean(to),
  })

  const [addConversation, { isSuccess: addConversationSuccess }] =
    useAddConversationMutation()
  const [editConversation, { isSuccess: editConversationSuccess }] =
    useEditConversationMutation()

  function doSearch(value) {
    setTo('')
    setConversation(undefined)
    setError('')
    if (checkValidEmail(value)) {
      setError('')
      if (value !== senderEmail) {
        setTo(value)
      } else {
        setError('You can not send message to yourself')
      }
    } else {
      setError('Invalid Email')
    }
  }
  const handleSearch = debounce(doSearch, 500)

  function handleSubmit(e) {
    e.preventDefault()
    if (conversation?.length) {
      editConversation({
        id: conversation[0].id,
        data: {
          participants: `${senderEmail}-${participant[0].email}`,
          users: [user, participant[0]],
          message,
          timestamp: new Date().getTime(),
        },
      })
    } else {
      addConversation({
        participants: `${senderEmail}-${participant[0].email}`,
        users: [user, participant[0]],
        message,
        timestamp: new Date().getTime(),
      })
    }
  }

  useEffect(() => {
    setError('')
    if (participant?.length) {
      dispatch(
        conversationsApi.endpoints.getConversation.initiate({
          userEmail: senderEmail,
          participantEmail: to,
        })
      )
        .unwrap()
        .then((data) => {
          setConversation(data)
        })
        .catch((error) => {
          setError('Something Went Wrong')
        })
    }

    if (to && !participant?.length) {
      setError('User Not found')
    }
  }, [participant, dispatch, to, senderEmail])

  useEffect(() => {
    if (addConversationSuccess || editConversationSuccess) {
      control()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addConversationSuccess, editConversationSuccess])

  return (
    open && (
      <>
        <div
          onClick={control}
          className='fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer'
        ></div>
        <div className='rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Send message
          </h2>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='rounded-md shadow-sm -space-y-px'>
              <Input
                title='Send To'
                name='to'
                type='email'
                onChange={(e) => handleSearch(e.target.value)}
                className='rounded-t-md'
                required
              />
              <TextArea
                title='Message'
                name='message'
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='rounded-b-md'
                required
              />
            </div>
            <div>
              <button
                disabled={conversation === undefined || message === '' || error}
                type='submit'
                className='form-btn  disabled:bg-indigo-400 disabled:cursor-not-allowed'
              >
                Send Message
              </button>
            </div>

            {error && <Error message={error} />}
          </form>
        </div>
      </>
    )
  )
}
