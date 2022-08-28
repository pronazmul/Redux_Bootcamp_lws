const store = require('./app/store')
const { counterActions } = require('./features/counter/counterSlice')
const {
  dynamicCounterActions,
} = require('./features/dynamicCounter/dynamicCounterSlice')
const { fetchPosts } = require('./features/posts/postSlice')

//Subscribed
store.subscribe(() => {
  // console.log({ suscribed: store.getState() })
})

store.dispatch(fetchPosts())
