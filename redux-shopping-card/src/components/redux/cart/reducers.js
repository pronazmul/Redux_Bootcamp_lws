import {
  CART_DECREASE_QUANTITY,
  CART_ERROR,
  CART_INCREASE_QUANTITY,
} from './actionTypes'
let initialState = [
  {
    id: 1,
    title: 'Asus Vivobook X515MA',
    price: 3500,
    quantity: 0,
  },
  {
    id: 2,
    title: 'Dell E19432HV 1.8 Inch',
    price: 9300,
    quantity: 0,
  },
  {
    id: 3,
    title: 'Canon Eos 45000D 18MP',
    price: 36500,
    quantity: 0,
  },
]

export const cartReducer = (
  state = { cartItems: initialState, error: null },
  action
) => {
  switch (action.type) {
    case CART_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        error: null,
      }
    case CART_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        ),
        error: null,
      }
    case CART_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
