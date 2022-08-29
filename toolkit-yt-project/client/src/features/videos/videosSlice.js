import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getVideos } from './videosAPI'

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: '',
}

const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const videos = await getVideos()
  return videos
})

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false
        state.isLoading = true
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false
        state.videos = action.payload
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false
        state.videos = []
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default videosSlice.reducer
