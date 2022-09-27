import { apiSlice } from './../api/apiSlice'

export const teamsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: (email) => ({
        url: `/teams?assigned_like=${email}`,
        method: 'GET',
      }),
    }),
    getTeam: builder.query({
      query: ({ id }) => ({
        url: `/teams/${id}`,
        method: 'GET',
      }),
    }),
    addTeam: builder.mutation({
      query: ({ email, data }) => ({
        url: `/teams`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const team = await queryFulfilled
          dispatch(
            apiSlice.util.updateQueryData('getTeams', arg.email, (draft) => {
              draft.push(team.data)
            })
          )
        } catch (error) {
          console.log(error)
        }
      },
    }),
    editTeam: builder.mutation({
      query: ({ id, data }) => ({
        url: `/teams/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetTeamsQuery,
  useGetTeamQuery,
  useAddTeamMutation,
  useEditTeamMutation,
} = teamsApi
