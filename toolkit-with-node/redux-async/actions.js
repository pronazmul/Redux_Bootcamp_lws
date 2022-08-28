// module init
const actions = {}

actions.postRequest = () => {
  return { type: 'posts/request' }
}

actions.postReueqstSuccess = (posts) => {
  return { type: 'posts/success', payload: posts }
}

actions.postFailed = (error) => {
  return { type: 'posts/failed', payload: error }
}

module.exports = actions
