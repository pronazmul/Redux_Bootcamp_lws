import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from './actionTypes'

let initialState = {
  value: 0,
}

export const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMIC_INCREMENT:
      return { ...state, value: state.value + action.payload || 1 }
    case DYNAMIC_DECREMENT:
      return { ...state, value: state.value - action.payload || 1 }
    default:
      return state
  }
}
