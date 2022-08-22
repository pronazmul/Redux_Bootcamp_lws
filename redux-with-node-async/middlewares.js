const fetch = require('node-fetch')

const asyncFatcherMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'todo/fetchTodo') {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    )
    let data = await response.json()

    next({ type: 'todo/loadTodo', payload: data })
    return
  }
  return next(action)
}

const delayMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todo/addTodo') {
    console.log('Khara 3 secend por data ditasi')

    setTimeout(() => {
      next(action)
    }, 3000)
    return
  }
  return next(action)
}

// Export to Next use
module.exports = {
  asyncFatcherMiddleware,
  delayMiddleware,
}
