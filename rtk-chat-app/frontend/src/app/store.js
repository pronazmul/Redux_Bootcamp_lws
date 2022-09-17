import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authReducer from '../features/auth/authSlice'
import conversationsReducer from '../features/conversations/conversationsSlice'
import messagesReducer from '../features/messages/messagesSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlwares) =>
    getDefaultMiddlwares().concat(apiSlice.middleware),
})
