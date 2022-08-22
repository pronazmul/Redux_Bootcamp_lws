import initialState from './initialState'
import { SEARCH } from './actionTypes'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      if (action.payload) {
        let searchQuery = new RegExp(action.payload, 'i')
        return initialState.filter((item) => item.title.match(searchQuery))
      } else {
        return initialState
      }
    default:
      return state
  }
}
export default reducer
