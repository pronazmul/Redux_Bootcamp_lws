import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: ({ status, colors }) => {
        let query = ''
        if (status === 'complete') {
          query += `completed_like=${true}&`
        }
        if (status === 'incomplete') {
          query += `completed_like=${false}&`
        }
        if (colors.length) {
          query += colors.map((c) => `color_like=${c}`).join('&')
        }
        return `/todos?${query}`
      },
      keepUnusedDataFor: 60,
      providesTags: ['Todos'],
    }),
    getTodo: builder.query({
      query: (id) => `/todos/${id}`,
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: '/todos',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice
