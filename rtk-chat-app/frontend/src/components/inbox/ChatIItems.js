import React from 'react'
import ChatItem from './ChatItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector, useDispatch } from 'react-redux'
import { useGetConversationsQuery } from '../../features/conversations/conversationsApi'
import Loader from '../ui/Loader'
import Error from './../ui/Error'
import Blank from './Blank'
import { conversationsApi } from './../../features/conversations/conversationsApi'

export default function ChatItems() {
  const {
    user: { email },
  } = useSelector((state) => state.auth)
  const { data, isLoading, isError, error } = useGetConversationsQuery(email)
  const { data: conversations, totalCount } = data || {}

  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)
  const dispatch = useDispatch()

  const fetchMore = () => {
    setPage((current) => current + 1)
  }

  React.useEffect(() => {
    if (page > 1) {
      dispatch(
        conversationsApi.endpoints.getMoreConversations.initiate({
          email,
          page,
        })
      )
    }
  }, [email, page, dispatch])

  React.useEffect(() => {
    if (totalCount > 0) {
      const more = Math.ceil(
        totalCount / Number(process.env.REACT_APP_CONVERSATIONS_PER_PAGE) > page
      )
      setHasMore(more)
    }
  }, [totalCount, page])

  return (
    <ul>
      {isLoading ? (
        <Loader content='Loading Conversations' />
      ) : isError && error ? (
        <Error message={error?.data} />
      ) : !isError && conversations.length === 0 ? (
        <Blank />
      ) : (
        <InfiniteScroll
          dataLength={conversations.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          height={window.innerHeight - 129}
        >
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <ChatItem conversation={conversation} email={email} />
            </li>
          ))}
        </InfiniteScroll>
      )}
    </ul>
  )
}
