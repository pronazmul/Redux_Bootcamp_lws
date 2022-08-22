const asyncFatcherMiddleware = (store) => (next) => async (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

// Export to Next use
module.exports = {
  asyncFatcherMiddleware,
}
