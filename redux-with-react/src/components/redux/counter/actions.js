import { DECREMENT, INCREMENT } from './actionTypes'

export const increment = () => {
  return {
    type: INCREMENT,
    payload: null,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: null,
  }
}
