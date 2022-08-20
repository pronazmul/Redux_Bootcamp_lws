import { CART_INCREASE_QUANTITY, CART_DECREASE_QUANTITY } from './actionTypes'

export const addToCart = (value) => {
  return {
    type: CART_INCREASE_QUANTITY,
    payload: value,
  }
}

export const removeFromCart = (value) => {
  return {
    type: CART_DECREASE_QUANTITY,
    payload: value,
  }
}
