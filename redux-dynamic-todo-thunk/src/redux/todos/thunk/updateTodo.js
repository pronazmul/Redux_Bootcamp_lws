import { update } from '../actions'

const updateTodo = (todoId, text) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://103.107.184.159:5001/api/v1/todos/${todoId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          text: text,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    const todo = await response.json()

    dispatch(update(todo.data._id, todo.data.text))
  }
}

export default updateTodo
