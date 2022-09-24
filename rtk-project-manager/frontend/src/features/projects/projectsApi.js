import { apiSlice } from '../api/apiSlice'

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: `/projects`,
        method: 'GET',
      }),
    }),
    getProject: builder.query({
      query: ({ id }) => ({
        url: `/projects/${id}`,
        method: 'GET',
      }),
    }),
    addProject: builder.mutation({
      query: ({ data }) => ({
        url: `/projects`,
        method: 'POST',
        body: data,
      }),
    }),
    editProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useAddProjectMutation,
  useEditProjectMutation,
} = messagesApi
