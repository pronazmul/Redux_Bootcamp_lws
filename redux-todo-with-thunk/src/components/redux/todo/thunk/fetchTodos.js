import { loaded } from '../actions'

const fetchTodos = async (dispatch, _getState) => {
  const response = await fetch('http://localhost:9000/todos')
  const data = await response.json()
  dispatch(loaded(data))
}

export default fetchTodos
