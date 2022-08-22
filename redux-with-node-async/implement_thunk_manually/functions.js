const fetch = require('node-fetch')

const fetchTodos = async (dispatch, _getState) => {
  let response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  )
  let data = await response.json()
  dispatch({ type: 'todo/loadTodo', payload: data })
}

module.exports = { fetchTodos }
