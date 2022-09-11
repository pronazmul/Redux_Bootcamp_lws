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
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ videoId, title }) => {
        let searchQuery = title
          .split(' ')
          .filter((v) => {
            const regx = new RegExp(/[a-zA-Z]/gi)
            return regx.test(v)
          })
          .map((v) => `title_like=${v}`)
          .join('&')
        return `/videos?${searchQuery}&_limit=4`
      },
    }),
  }),
})

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } =
  apiSlice
