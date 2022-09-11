import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  tagTypes: ['Videos', 'Video', 'RelatedVideos'],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => '/videos',
      keepUnusedDataFor: 600,
      providesTags: ['Videos'],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (_result, _error, arg) => [{ type: 'Video', id: arg }],
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
      providesTags: (_result, _error, arg) => [
        { type: 'RelatedVideos', id: arg.videoId },
      ],
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: '/videos',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Videos'],
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (_result, _error, arg) => [
        'Videos',
        { type: 'Video', id: arg.id },
        { type: 'RelatedVideos', id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Videos'],
    }),
  }),
})

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = apiSlice
