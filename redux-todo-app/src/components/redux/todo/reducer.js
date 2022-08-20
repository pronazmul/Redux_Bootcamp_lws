import {
  TOGGLED,
  ADDED,
  COLOR_SELECTED,
  DELETED,
  ALL_COMPLITED,
  CLEAR_COMPLITED,
} from './actiontypes'
import initialState from './initialState'

function nextId(todoArr) {
  let maxId = todoArr.reduce((max, todo) => Math.max(max, todo.id), 0)
  return maxId + 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        { id: nextId(state), text: action.payload, complited: false },
      ]

    case TOGGLED:
      return state.map((todo) =>
        todo.id !== action.payload
          ? todo
          : { ...todo, complited: !todo.complited }
      )

    case COLOR_SELECTED:
      let { id, color } = action.payload
      return state.map((todo) => (todo.id !== id ? todo : { ...todo, color }))

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload)

    case ALL_COMPLITED:
      return state.map((todo) => ({ ...todo, complited: true }))

    case CLEAR_COMPLITED:
      return state.filter((todo) => !todo.complited)

    default:
      return state
  }
}

export default reducer
