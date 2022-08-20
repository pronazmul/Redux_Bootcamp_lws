import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import productQuantityChecker from './middlewares/productQuantityChecker'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productQuantityChecker))
)

export default store
