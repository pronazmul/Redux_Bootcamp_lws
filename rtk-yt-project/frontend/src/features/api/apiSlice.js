import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => '/videos',
    }),
  }),
})

export const { useGetVideosQuery } = apiSlice
