import rootReducer from './../rootReducer'

/**
 *
 * @param {store} store
 * @returns {function(next)}
 */
const myLogger = (store) => (next) => (action) => {
  let state = store.getState()
  let changedState = [action].reduce(rootReducer, state)
  console.log(
    `Action: ${action.type}, \n Before State: ${JSON.stringify(
      state
    )} \n After State: ${JSON.stringify(changedState)}`
  )
  next(action)
}

export default myLogger
