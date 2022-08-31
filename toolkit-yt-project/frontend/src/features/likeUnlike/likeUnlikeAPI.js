import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export const likeVideo = createAsyncThunk(
  'like/likeVideo',
  async ({ id, likeCount }) => {
    const data = { likes: likeCount }
    let response = await axios.patch(`/videos/${id}`, data)
    return response.data?.likes
  }
)

export const unlikeVideo = createAsyncThunk(
  'unlike/unlikeVideo',
  async ({ id, unlikeCount }) => {
    const data = { unlikes: unlikeCount }
    let response = await axios.patch(`/videos/${id}`, data)
    return response.data?.unlikes
  }
)
