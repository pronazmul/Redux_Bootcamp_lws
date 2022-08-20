import { COLOR_CHANGED, STATUS_CHANGED } from './actionTypes'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      }
    case COLOR_CHANGED:
      let { color, changeType } = action.payload
      switch (changeType) {
        case 'add':
          return { ...state, colors: [...state.colors, color] }
        case 'remove':
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          }
        default:
          return state
      }

    default:
      return state
  }
}

export default reducer
