const fetch = require('node-fetch')
const actions = require('./actions')
const store = require('./store')

const thunkCreator = () => async (dispatch, _getState) => {
  dispatch(actions.postRequest())
  try {
    let stream = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=2'
    )
    let data = await stream.json()
    dispatch(actions.postReueqstSuccess(data))
  } catch (error) {
    dispatch(actions.postFailed(error.message))
  }
}

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(thunkCreator())
