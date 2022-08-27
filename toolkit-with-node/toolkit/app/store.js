const { configureStore } = require('@reduxjs/toolkit')
const counterSlice = require('../features/counter/counterSlice')
const dynamicCounterSlice = require('../features/dynamicCounter/dynamicCounterSlice')
const { createLogger } = require('redux-logger')

const store = configureStore({
  reducer: {
    counter: counterSlice,
    dynamicCounter: dynamicCounterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger()),
})

module.exports = store
