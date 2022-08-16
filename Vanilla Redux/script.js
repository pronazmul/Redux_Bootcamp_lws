//Get Dom Elements:
let counter = document.getElementById('counter')
let incrementBtn = document.getElementById('increment')
let decrementBtn = document.getElementById('decrement')

//Initial State
let initialState = { value: 0 }

//Make Reducer
function stateReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return { ...state, value: state.value + 1 }
  } else if (action.type === 'decrement') {
    return { ...state, value: state.value - 1 }
  } else {
    return state
  }
}

//Make Store
const store = Redux.createStore(stateReducer)

const render = () => {
  let state = store.getState()
  counter.innerText = state.value
}

render()

//Subscribe Store
store.subscribe(render)

//Increment Action Dispatch
incrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'increment' })
})

//Decrement Action Dispatch
decrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'decrement' })
})
