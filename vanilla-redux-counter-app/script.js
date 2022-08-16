//Get Dom Elements:
let counter = document.getElementById('counter')
let incrementBtn = document.getElementById('increment')
let decrementBtn = document.getElementById('decrement')

//Action Pointer
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//Action Creator
const increment = (value) => {
  return { type: INCREMENT, payload: value }
}

const decrement = (value) => {
  return { type: DECREMENT, payload: value }
}

//Initial State
let initialState = { value: 0 }

//Make Reducer
function stateReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + action.payload }
  } else if (action.type === DECREMENT) {
    if (state.value <= 0) return { ...state, value: 0 }
    return { ...state, value: state.value - action.payload }
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
  store.dispatch(increment(5))
})

//Decrement Action Dispatch
decrementBtn.addEventListener('click', () => {
  store.dispatch(decrement(3))
})
