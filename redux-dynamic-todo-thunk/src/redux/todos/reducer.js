import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED,
  UPDATETODO,
} from './actionTypes'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload

    case ADDED:
      return [...state, action.payload]

    case TOGGLED:
      return state.map((todo) => {
        if (todo._id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed,
        }
      })

    case COLORSELECTED:
      const { todoId, color } = action.payload
      return state.map((todo) => {
        if (todo._id !== todoId) {
          return todo
        }
        return {
          ...todo,
          color: color,
        }
      })
    case UPDATETODO:
      return state.map((todo) => {
        if (todo._id !== action.payload.todoId) {
          return todo
        }
        return {
          ...todo,
          text: action.payload.text,
        }
      })

    case DELETED:
      return state.filter((todo) => todo._id !== action.payload)

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        }
      })

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed)

    default:
      return state
  }
}

export default reducer
