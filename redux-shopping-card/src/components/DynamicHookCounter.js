import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/dynamic_counter/actions'

const DynamicHookCounter = () => {
  const { value: count } = useSelector((state) => state.dynamicCounter)

  const dispatch = useDispatch()
  const incrementHandler = (value) => {
    dispatch(increment(value))
  }
  const decrementHadler = (value) => {
    dispatch(decrement(value))
  }

  return (
    <div class='mx-auto max-w-md mt-10 space-y-5'>
      <div class='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
        <p class='text-2xl font-semibold'>{count}</p>
        <div class='flex space-x-3'>
          <button
            onClick={() => incrementHandler(5)}
            class='bg-indigo-400 text-white px-3 py-2 rounded shadow'
          >
            Increment
          </button>
          <button
            onClick={() => decrementHadler(3)}
            class='bg-red-400 text-white px-3 py-2 rounded shadow'
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default DynamicHookCounter
