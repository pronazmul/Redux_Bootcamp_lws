import {
  CART_DECREASE_QUANTITY,
  CART_INCREASE_QUANTITY,
} from '../cart/actionTypes'

let initialState = [
  {
    id: 1,
    title: 'Asus Vivobook X515MA',
    price: 3500,
    countInStock: 5,
  },
  {
    id: 2,
    title: 'Dell E19432HV 1.8 Inch',
    price: 9300,
    countInStock: 7,
  },
  {
    id: 3,
    title: 'Canon Eos 45000D 18MP',
    price: 36500,
    countInStock: 10,
  },
]

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_DECREASE_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, countInStock: product.countInStock + 1 }
          : product
      )
    case CART_INCREASE_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? {
              ...product,
              countInStock: product.countInStock - 1,
            }
          : product
      )
    default:
      return state
  }
}
