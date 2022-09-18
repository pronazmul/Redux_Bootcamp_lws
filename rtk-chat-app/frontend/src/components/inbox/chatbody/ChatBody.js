// import Blank from "./Blank";
import { useParams } from 'react-router-dom'
import { useGetMessagesQuery } from '../../../features/messages/messagesApi'
import Error from '../../ui/Error'
import Loader from '../../ui/Loader'
import ChatHead from './ChatHead'
import Messages from './Messages'
import Options from './Options'
import Blank from './Blank'

export default function ChatBody() {
  const { id } = useParams()

  const { data: messages, isLoading, isError, error } = useGetMessagesQuery(id)

  return (
    <div className='w-full lg:col-span-2 lg:block'>
      <div className='w-full grid conversation-row-grid'>
        {isLoading ? (
          <Loader />
        ) : isError && error ? (
          <Error message={error?.data} />
        ) : !isError && messages.length === 0 ? (
          <Blank />
        ) : (
          <>
            <ChatHead message={messages[0]} />
            <Messages messages={messages} />
            <Options info={messages[0]} />
          </>
        )}
      </div>
    </div>
  )
}
