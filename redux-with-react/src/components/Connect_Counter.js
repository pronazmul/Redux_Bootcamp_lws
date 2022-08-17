import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from './redux/counter/actions'

const Counter = ({ count, increment, decrement }) => {
  return (
    <div class='mx-auto max-w-md mt-10 space-y-5'>
      <div class='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
        <p class='text-2xl font-semibold'>{count}</p>
        <div class='flex space-x-3'>
          <button
            onClick={() => increment(2)}
            class='bg-indigo-400 text-white px-3 py-2 rounded shadow'
          >
            Increment
          </button>
          <button
            onClick={() => decrement(2)}
            class='bg-red-400 text-white px-3 py-2 rounded shadow'
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state, _ownProps) {
  return {
    count: state.counter.value,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
