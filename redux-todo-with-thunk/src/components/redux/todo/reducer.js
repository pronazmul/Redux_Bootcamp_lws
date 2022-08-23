import {
  TOGGLED,
  ADDED,
  COLOR_SELECTED,
  DELETED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  LOADED,
} from './actiontypes'
import initialState from './initialState'

function nextId(todoArr) {
  let maxId = todoArr.reduce((max, todo) => Math.max(max, todo.id), 0)
  return maxId + 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return [...state, ...action.payload]

    case ADDED:
      return [
        ...state,
        { id: nextId(state), text: action.payload, completed: false },
      ]

    case TOGGLED:
      return state.map((todo) =>
        todo.id !== action.payload
          ? todo
          : { ...todo, completed: !todo.completed }
      )

    case COLOR_SELECTED:
      let { id, color } = action.payload
      return state.map((todo) => (todo.id !== id ? todo : { ...todo, color }))

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload)

    case ALL_COMPLETED:
      return state.map((todo) => ({ ...todo, completed: true }))

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed)

    default:
      return state
  }
}

export default reducer
