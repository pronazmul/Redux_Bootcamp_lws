const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const { default: fetch } = require('node-fetch')

//initial State
let initialState = {
  loading: false,
  posts: [],
  error: '',
}

//Thunk Actions
const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  let respose = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=2'
  )
  let data = await respose.json()
  return data
})

//Create Slice
const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

module.exports = postSlice.reducer
module.exports.fetchPosts = fetchPosts
