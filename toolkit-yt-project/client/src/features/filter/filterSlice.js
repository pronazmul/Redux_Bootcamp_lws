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
  },
})

export default filterSlice.reducer
export const { tagSelected, tagRemoved } = filterSlice.actions
