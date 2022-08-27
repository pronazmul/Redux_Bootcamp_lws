const { produce } = require('immer')
const { legacy_createStore, combineReducers } = require('redux')

// Initial State
const initialState = {
  employeeName: 'John Doe',
  employeeId: 27,
  address: {
    locality: {
      address1: '1600 javascript road',
      address2: 'beside react avenue',
    },
    city: 'Dhaka',
    state: 'Dhaka',
    country: 'Bangladesh',
  },
}

//Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ADDRESS1':
      return {
        ...state,
        address: {
          ...state.address,
          locality: {
            ...state.address.locality,
            address1: action.payload,
          },
        },
      }
    case 'UPDATE_ADDRESS2':
      return produce(state, (oldData) => {
        oldData.address.locality.address2 = action.payload
      })

    default:
      return state
  }
}

//CombineReducer

const reducers = combineReducers({
  user: userReducer,
})

//Create Store
const store = legacy_createStore(reducers)

console.log(store.getState())

//Subscribe
store.subscribe(() => {
  console.log({ sub: JSON.stringify(store.getState()) })
})

//Dispatch
store.dispatch({
  type: 'UPDATE_ADDRESS1',
  payload: 'Manualy Immutiabely Updated Road',
})

store.dispatch({ type: 'UPDATE_ADDRESS2', payload: 'UPdate using Immer' })
