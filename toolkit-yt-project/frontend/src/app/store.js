import { configureStore } from '@reduxjs/toolkit'
import videosReducer from '../features/videos/videosSlice'
import videoReducer from '../features/video/videoSlice'
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice'
import tagsReducer from '../features/tags/tagsSlice'
import filterReducer from '../features/filter/filterSlice'
import paginationReducer from '../features/pagination/paginationSlice'

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
    pagination: paginationReducer,
  },
})
