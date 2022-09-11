import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filtersReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
})
