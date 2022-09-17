import { apiSlice } from '../api/apiSlice'

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => ({
        url: `/users?email=${email}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetUserQuery } = usersApi
