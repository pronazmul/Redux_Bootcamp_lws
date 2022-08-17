import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducers'
import { dynamicCounterReducer } from './dynamic_counter/reducers'

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
})

export default rootReducer
