import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authReducer from '../features/auth/authSlice'
import teamsReducer from '../features/teams/teamsSlice'
import projectsReducer from '../features/projects/projectsSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    teams: teamsReducer,
    projects: projectsReducer,
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlwares) =>
    getDefaultMiddlwares().concat(apiSlice.middleware),
})
