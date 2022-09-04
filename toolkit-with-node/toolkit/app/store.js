const { configureStore } = require('@reduxjs/toolkit')
const { createLogger } = require('redux-logger')
const postSlice = require('../features/post/postSlice')
const relatedPostsSlice = require('../features/relatedPosts/relatedPostsSlice')

const store = configureStore({
  reducer: {
    post: postSlice,
    relatedPosts: relatedPostsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger()),
})

module.exports = store
