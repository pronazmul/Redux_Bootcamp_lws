const { legacy_createStore, applyMiddleware } = require('redux')
const { fetchTodos } = require('./functions')
const { asyncFatcherMiddleware } = require('./middlewares')

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
  applyMiddleware(asyncFatcherMiddleware)
)

//Subscribe to Todo
store.subscribe(() => {
  console.log(store.getState())
})

//Dispatch to Reducer:
store.dispatch(fetchTodos)
