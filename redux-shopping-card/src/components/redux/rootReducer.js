import { combineReducers } from 'redux'
import { productReducer } from './product/reducers'
import { cartReducer } from './cart/reducers'

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  error: null,
})

export default rootReducer
