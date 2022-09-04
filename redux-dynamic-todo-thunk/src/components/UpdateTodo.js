import React from 'react'
import { useState } from 'react'
import updateTodo from '../redux/todos/thunk/updateTodo'
import CheckCircle from './Icons/CheckCircle'
import { useDispatch } from 'react-redux'

const UpdateTodo = ({ id, text, setEdit }) => {
  let [input, setInput] = useState(text)
  const dispatch = useDispatch()

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateTodo(id, input))
    setEdit(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=' w-full flex justify-between bg-gray-100 space-x-2 rounded'
    >
      <input
        type='text'
        className='w-full text-sm  border-none outline-none bg-gray-100 text-gray-500 py-2 rounded'
        value={input}
        onChange={handleChange}
      />
      <button type='submit' className='text-green-500'>
        <CheckCircle />
      </button>

      
    </form>
  )
}

export default UpdateTodo
