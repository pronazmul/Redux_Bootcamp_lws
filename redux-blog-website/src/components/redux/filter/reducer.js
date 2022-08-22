import { RESET_FILTER, TOGGLE_AUTHOR, TOGGLE_TAG } from './actionTypes'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTHOR:
      let { author, changeType: authorChangeType } = action.payload
      switch (authorChangeType) {
        case 'add':
          return { ...state, author: author }
        case 'remove':
          return { ...state, author: 'all' }
        default:
          return state
      }

    case TOGGLE_TAG:
      let { tag, changeType } = action.payload
      switch (changeType) {
        case 'add':
          return { ...state, tag: tag }
        case 'remove':
          return { ...state, tag: 'all' }
        default:
          return state
      }
    case RESET_FILTER:
      return { ...state, tag: 'all', author: 'all' }

    default:
      return state
  }
}

export default reducer
