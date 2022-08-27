const store = require('./toolkit/app/store')
const { counterActions } = require('./toolkit/features/counter/counterSlice')
console.log({ initial: store.getState() })

//Subscribed
store.subscribe(() => {
  console.log({ suscribed: store.getState() })
})

store.dispatch(counterActions.increment())
store.dispatch(counterActions.increment())
store.dispatch(counterActions.increment())
store.dispatch(counterActions.decrement())
