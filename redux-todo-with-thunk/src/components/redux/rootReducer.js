import { combineReducers } from 'redux'
import todoReducer from './todo/reducer'
import filterReducer from './filter/reducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
})

export default rootReducer
