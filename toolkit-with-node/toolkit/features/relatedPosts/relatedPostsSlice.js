const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const { default: fetch } = require('node-fetch')
const { fetchSinglePost } = require('../post/postSlice')

//initial State
let initialState = {
  loading: false,
  posts: [],
  error: '',
}

//Thunk Actions
const fetchRelatedPosts = createAsyncThunk(
  'posts/fetchRelatedPosts',
  async (searchQuery) => {
    let respose = await fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=${searchQuery}`
    )
    let data = await respose.json()
    return data
  }
)

//Create Slice
const relatedPostsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedPosts.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
    })
    builder.addCase(fetchRelatedPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
      let query = action.payload.title
        .split(' ')
        .filter(Boolean)
        .join('&title_like=')
    })
  },
})

module.exports = relatedPostsSlice.reducer
module.exports.fetchRelatedPosts = fetchRelatedPosts
