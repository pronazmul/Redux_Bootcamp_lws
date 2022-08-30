import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tags: [],
  search: '',
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
      state.search = action.payload
    },
  },
})

export default filterSlice.reducer
export const { tagSelected, tagRemoved, searched } = filterSlice.actions
