import { apiSlice } from '../api/apiSlice'

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
