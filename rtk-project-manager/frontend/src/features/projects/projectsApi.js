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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const project = await queryFulfilled
          dispatch(
            apiSlice.util.updateQueryData('getProjects', undefined, (draft) => {
              draft.push(project.data)
            })
          )
        } catch (error) {
          console.log(error)
        }
      },
    }),
    updateProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: 'PATCH',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const project = await queryFulfilled
          dispatch(
            apiSlice.util.updateQueryData('getProjects', undefined, (draft) => {
              const index = draft.findIndex((item) => item.id == arg?.id)
              draft.splice(index, 1, project.data)
            })
          )
        } catch (error) {
          console.log(error)
        }
      },
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled
          dispatch(
            apiSlice.util.updateQueryData('getProjects', undefined, (draft) => {
              const index = draft.findIndex((item) => item.id == arg)
              draft.splice(index, 1)
            })
          )
        } catch (error) {
          console.log(error)
        }
      },
    }),
  }),
})

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = messagesApi
