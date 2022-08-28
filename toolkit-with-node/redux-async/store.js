const { legacy_createStore, applyMiddleware } = require('redux')
const { default: thunk } = require('redux-thunk')
const asyncReducer = require('./reducer')

const store = legacy_createStore(asyncReducer, applyMiddleware(thunk))

module.exports = store
