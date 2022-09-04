import { colorSelected } from '../actions'

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://103.107.184.159:5001/api/v1/todos/${todoId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          color: color,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    const todo = await response.json()

    dispatch(colorSelected(todo.data._id, todo.data.color))
  }
}

export default updateColor
