const { legacy_createStore, applyMiddleware } = require('redux')
const { asyncFatcherMiddleware, delayMiddleware } = require('./middlewares')

// Inital State
let initalState = {
  todos: [],
}

// Create Reducer
const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'todo/addTodo':
      return { ...state, todos: [...state.todos, { title: action.payload }] }

    case 'todo/loadTodo':
      return { ...state, todos: [...state.todos, ...action.payload] }

    default:
      return state
  }
}

//Create Store
const store = legacy_createStore(
  todoReducer,
  applyMiddleware(delayMiddleware, asyncFatcherMiddleware)
)

//Subscribe to Todo
store.subscribe(() => {
  console.log(store.getState())
})

//Dispatch to Reducer:

// store.dispatch({
//   type: 'todo/addTodo',
//   payload: "Hello, I'm Alimur Razi",
// })
store.dispatch({
  type: 'todo/fetchTodo',
})
