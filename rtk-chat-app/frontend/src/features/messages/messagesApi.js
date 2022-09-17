import { apiSlice } from '../api/apiSlice'

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => ({
        url: `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
        method: 'GET',
      }),
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
