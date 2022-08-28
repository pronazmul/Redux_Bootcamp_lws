//Initial State

let initialState = {
  loading: false,
  posts: [],
  error: '',
}

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'posts/request':
      return { ...state, loading: true }
    case 'posts/success':
      return { ...state, loading: false, posts: action.payload, error: '' }
    case 'posts/failed':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

module.exports = asyncReducer
