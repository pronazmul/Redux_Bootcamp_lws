import { added } from '../actions'

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch('http://103.107.184.159:5001/api/v1/todos', {
      method: 'POST',
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const todo = await response.json()

    dispatch(added(todo.data))
  }
}

export default addTodo
