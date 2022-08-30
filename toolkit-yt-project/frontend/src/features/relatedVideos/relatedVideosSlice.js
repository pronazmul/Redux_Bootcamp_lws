import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRelatedVideos } from './relatedVideosAPI'

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: '',
}

export const fetchRelatedVideos = createAsyncThunk(
  'relatedVideos/fetchRelatedVideos',
  async ({ tags, id }) => {
    const videos = await getRelatedVideos({ tags, id })
    return videos
  }
)

const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false
        state.isLoading = true
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false
        state.videos = action.payload
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false
        state.videos = []
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default relatedVideosSlice.reducer
