//Get Dom Elements:
const container = document.getElementById('counter-container')
const addCounterBtn = document.getElementById('add-counter')
const resetBtn = document.getElementById('reset')

// //Action Pointer
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_COUNTER = 'ADD_COUNTER'
const RESET = 'RESET'

// //Action Creator
const increment = (id, value) => {
  return { type: INCREMENT, payload: value, id }
}

const decrement = (id, value) => {
  return { type: DECREMENT, payload: value, id }
}

const addCounter = () => {
  return { type: ADD_COUNTER, payload: null }
}

const resetCounter = () => {
  return { type: RESET, payload: null }
}

//Initial State
let initialState = [{ id: 1, value: 0 }]

//Make Reducer
function stateReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.map((v) =>
        v.id === action.id
          ? { ...v, value: v.value + Number(action.payload) }
          : { ...v }
      )

    case DECREMENT:
      return state.map((v) => {
        let value = v.value - Number(action.payload)
        return v.id === action.id
          ? {
              ...v,
              value: value > 0 ? value : 0,
            }
          : { ...v }
      })

    case ADD_COUNTER:
      return [...state, { id: state.length + 1, value: 0 }]

    case RESET:
      return state.map((item) => ({ ...item, value: 0 }))

    default:
      return state
  }
}

//Make Store
const store = Redux.createStore(stateReducer)

const render = () => {
  let state = store.getState()

  let countCards = ``

  state.forEach((element) => {
    countCards += `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mt-5"
  >
  <div class="text-2xl font-semibold">${element.value}</div>
  <div class="flex space-x-3">
    <button
      onclick="incrementListener(${element.id})"
      class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
    >
      Increment
    </button>
    <button
      onclick="decrementListener(${element.id})"
      class="bg-red-400 text-white px-3 py-2 rounded shadow"
    >
      Decrement
    </button>
  </div>
  </div>`
  })
  container.innerHTML = countCards
}
render()

//Subscribe Store
store.subscribe(render)

//Add Counter Button Action Dispatch:
addCounterBtn.addEventListener('click', () => {
  store.dispatch(addCounter())
})

//Reset Button Action Dispatch:
resetBtn.addEventListener('click', () => {
  store.dispatch(resetCounter())
})

//Increment dispatch
function incrementListener(id) {
  let input = window.prompt()
  let value = Number(input) ? input : 1
  store.dispatch(increment(id, value))
}

//Decrement dispatch
function decrementListener(id) {
  let input = window.prompt()
  let value = Number(input) ? input : 1
  store.dispatch(decrement(id, value))
}
