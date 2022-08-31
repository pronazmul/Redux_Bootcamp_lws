import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tags: [],
  search: '',
  author: '',
}

const filterSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload)
    },
    tagRemoved: (state, action) => {
      let index = state.tags.indexOf(action.payload)
      if (index > -1) state.tags.splice(index, 1)
    },
    searched: (state, action) => {
      state.author = ''
      state.search = action.payload
    },
    authorSelected: (state, action) => {
      state.tags = []
      state.search = ''
      state.author = action.payload
    },
    resetFilter: (state, action) => {
      state.tags = []
      state.search = ''
      state.author = ''
    },
  },
})

export default filterSlice.reducer
export const {
  tagSelected,
  tagRemoved,
  searched,
  authorSelected,
  resetFilter,
} = filterSlice.actions
