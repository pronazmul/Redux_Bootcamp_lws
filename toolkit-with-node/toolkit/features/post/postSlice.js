const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const { default: fetch } = require('node-fetch')

//initial State
let initialState = {
  loading: false,
  post: {},
  error: '',
}

//Thunk Actions
const fetchSinglePost = createAsyncThunk('post/fetchSinglePost', async () => {
  let respose = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let data = await respose.json()
  return data
})

//Create Slice
const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePost.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
      state.loading = false
      state.post = action.payload
    })
    builder.addCase(fetchSinglePost.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

module.exports = postSlice.reducer
module.exports.fetchSinglePost = fetchSinglePost
