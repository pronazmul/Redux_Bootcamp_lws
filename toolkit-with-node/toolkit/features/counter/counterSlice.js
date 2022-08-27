const { createSlice } = require('@reduxjs/toolkit')

//Initial state
let initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++
    },
    decrement: (state, action) => {
      state.count--
    },
  },
})

module.exports = counterSlice.reducer
module.exports.counterActions = counterSlice.actions
