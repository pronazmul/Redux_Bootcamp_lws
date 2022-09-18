import socketConnection from '../../utils/socketConnection'
import { apiSlice } from '../api/apiSlice'

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => ({
        url: `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
        method: 'GET',
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        //Create Socket:
        const socket = socketConnection()
        try {
          //Wait for Cache Data Loaded
          await cacheDataLoaded
          //listen event and take dicision to update or not
          socket.on('message', (data) => {
            updateCachedData((draft) => {
              const msgId = data?.data?.conversationId.toString()
              if (arg === msgId) {
                draft.push(data?.data)
              }
            })
          })
        } catch (error) {}

        //Cache entry removed if not in page close the connection
        await cacheEntryRemoved
        socket.close()
      },
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: `/messages`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useGetMessagesQuery } = messagesApi
