import { createSlice } from '@reduxjs/toolkit'
import { fetchVideos } from './../videos/videosSlice'

const initialState = {
  pages: 0,
  page: 1,
  entities: 4,
}

const patinationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    pageSelected: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.pages = Math.ceil(action.payload.totalCount / state.entities)
    })
  },
})

export default patinationSlice.reducer
export const { pageSelected } = patinationSlice.actions
