import { createSlice } from '@reduxjs/toolkit'
import { fetchTransactions } from '../transaction/transactionSlice'

const initialState = {
  search: '',
  type: '',
  pages: 0,
  page: 1,
  entities: 10,
  totalCount: 0,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload
    },
    typeSelected: (state, action) => {
      state.type = action.payload
    },
    pageSelected: (state, action) => {
      state.page = action.payload
    },
    resetFilter: (state) => {
      state.search = ''
      state.type = ''
      state.page = 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.pages = Math.ceil(action.payload.totalCount / state.entities)
      state.totalCount = action.payload.totalCount
    })
  },
})

export default filterSlice.reducer
export const { searched, typeSelected, pageSelected, resetFilter } =
  filterSlice.actions
