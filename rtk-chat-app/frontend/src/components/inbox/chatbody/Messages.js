import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { messagesApi } from '../../../features/messages/messagesApi'

export default function Messages({ messages: data, totalCount, id }) {
  const {
    user: { email },
  } = useSelector((state) => state.auth)
  const messages = data.slice().sort((a, b) => a.timestamp - b.timestamp)

  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)
  const dispatch = useDispatch()

  const fetchMore = () => {
    setPage((current) => current + 1)
  }

  React.useEffect(() => {
    if (page > 1) {
      dispatch(messagesApi.endpoints.getMoreMessages.initiate({ id, page }))
    }
  }, [page, id, dispatch])

  React.useEffect(() => {
    if (totalCount > 0) {
      const more =
        Math.ceil(
          Number(totalCount) / Number(process.env.REACT_APP_MESSAGES_PER_PAGE)
        ) > page
      setHasMore(more)
    }
  }, [totalCount, page])

  return (
    <div
      id='scrollableDiv'
      className='relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse'
    >
      <ul>
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMore}
          hasMore={hasMore}
          inverse={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget='scrollableDiv'
          className='space-y-2'
          initialScrollY={0}
        >
          {messages.map((msg) => (
            <Message
              key={msg.id}
              justify={
                msg?.sender?.email !== email ? 'justify-start' : 'justify-end'
              }
              message={msg.message}
            />
          ))}
        </InfiniteScroll>
      </ul>
    </div>
  )
}
