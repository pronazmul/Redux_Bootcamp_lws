import ChatItem from './ChatItem'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetConversationsQuery } from '../../features/conversations/conversationsApi'
import Loader from '../ui/Loader'
import Error from './../ui/Error'
import Blank from './Blank'

export default function ChatItems() {
  const {
    user: { email },
  } = useSelector((state) => state.auth)
  const { data, isLoading, isError, error } = useGetConversationsQuery(email)
  const { data: conversations, totalCount } = data || {}

  return (
    <ul>
      {isLoading ? (
        <Loader content='Loading Conversations' />
      ) : isError && error ? (
        <Error message={error?.data} />
      ) : !isError && conversations.length === 0 ? (
        <Blank />
      ) : (
        conversations.map((conversation) => (
          <li key={conversation.id}>
            <ChatItem conversation={conversation} email={email} />
          </li>
        ))
      )}
    </ul>
  )
}
