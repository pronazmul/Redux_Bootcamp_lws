import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filtered: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    searchProject: (state, action) => {
      state.filtered = action.payload
    },
  },
})

export const { searchProject } = projectsSlice.actions
export default projectsSlice.reducer
