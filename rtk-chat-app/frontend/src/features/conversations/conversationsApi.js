import { apiSlice } from '../api/apiSlice'
import { messagesApi } from './../messages/messagesApi'
import socketConnection from '../../utils/socketConnection'

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
        method: 'GET',
      }),

      transformResponse(apiResponse, meta) {
        const totalCount = meta.response.headers.get('X-Total-Count')
        return {
          data: apiResponse,
          totalCount,
        }
      },

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
          socket.on('conversation', (data) => {
            updateCachedData((draft) => {
              const conversation = draft.data.find(
                (c) => c.id == data?.data?.id
              )

              if (conversation?.id) {
                conversation.message = data?.data?.message
                conversation.timestamp = data?.data?.timestamp
              }

              if (!conversation?.id && data?.data?.participants.includes(arg)) {
                draft.data.unshift(data.data)
              }
            })
          })
        } catch (error) {}

        //Wait for cache entry removed if not in page close the connection
        await cacheEntryRemoved
        socket.close()
      },
    }),
    getMoreConversations: builder.query({
      query: ({ email, page }) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=${page}&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
        method: 'GET',
      }),
      async onQueryStarted({ email }, { queryFulfilled, dispatch }) {
        try {
          const conversations = await queryFulfilled
          if (conversations?.data?.length > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                'getConversations',
                email,
                (draft) => {
                  return {
                    data: [...draft.data, ...conversations.data],
                    totalCount: Number(draft.totalCount),
                  }
                }
              )
            )
          }
        } catch (error) {}
      },
    }),
    getConversation: builder.query({
      query: ({ userEmail, participantEmail }) => ({
        url: `/conversations?participants_like=${userEmail}-${participantEmail}&participants_like=${participantEmail}-${userEmail}`,
        method: 'GET',
      }),
    }),
    addConversation: builder.mutation({
      query: ({ senderEmail, data }) => ({
        url: `/conversations`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const conversation = await queryFulfilled
        //Add Message Silently After Cnoversation Added Successfull
        if (conversation?.data?.id) {
          const users = arg.data.users
          const sender = users.find((user) => user.email === arg.senderEmail)
          const receiver = users.find((user) => user.email !== arg.senderEmail)
          dispatch(
            messagesApi.endpoints.addMessage.initiate({
              conversationId: conversation.data.id,
              sender,
              receiver,
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            })
          )
        }
      },
    }),
    editConversation: builder.mutation({
      query: ({ id, senderEmail, data }) => ({
        url: `/conversations/${id}`,
        method: 'PATCH',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //Optimistic Conversations Cache Update Start
        // const patchResult = dispatch(
        //   apiSlice.util.updateQueryData(
        //     'getConversations',
        //     arg.senderEmail,
        //     (draft) => {
        //       const conversation = draft.data.find((c) => c.id == arg.id)
        //       conversation.message = arg.data.message
        //       conversation.timestamp = arg.data.timestamp
        //     }
        //   )
        // )
        //Optimistic Conversations Cache Update End
        try {
          const conversation = await queryFulfilled
          if (conversation?.data?.id) {
            const users = arg.data.users
            const sender = users.find((user) => user.email === arg.senderEmail)
            const receiver = users.find(
              (user) => user.email !== arg.senderEmail
            )

            const res = await dispatch(
              messagesApi.endpoints.addMessage.initiate({
                conversationId: conversation.data.id,
                sender,
                receiver,
                message: arg.data.message,
                timestamp: arg.data.timestamp,
              })
            ).unwrap()

            //UPDATE MESSAGE CACHE PASSIMISTICALLY

            // let c_id = res.conversationId.toString()
            // dispatch(
            //   apiSlice.util.updateQueryData('getMessages', c_id, (draft) => {
            //     draft.push(res)
            //   })
            // )

            //UPDATE MESSAGE CACHE PASSIMISTICALLY
          }
        } catch (error) {
          // patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetConversationsQuery,
  useGetMoreConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi
