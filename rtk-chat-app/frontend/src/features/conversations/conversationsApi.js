import { apiSlice } from '../api/apiSlice'
import { messagesApi } from './../messages/messagesApi'

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
        method: 'GET',
      }),
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
        //Optimistic Cache Update Start
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            'getConversations',
            arg.senderEmail,
            (draft) => {
              const conversation = draft.find((c) => c.id == arg.id)
              conversation.message = arg.data.message
              conversation.timestamp = arg.data.timestamp
            }
          )
        )
        //Optimistic Cache Update End

        try {
          const conversation = await queryFulfilled
          if (conversation?.data?.id) {
            const users = arg.data.users
            const sender = users.find((user) => user.email === arg.senderEmail)
            const receiver = users.find(
              (user) => user.email !== arg.senderEmail
            )

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
        } catch (error) {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi
