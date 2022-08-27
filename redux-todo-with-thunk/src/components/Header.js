import React, { useState } from 'react'
import NoteImage from '../assets/images/notes.png'
import DoubleTick from '../assets/images/double-tick.png'
import { useDispatch } from 'react-redux'
import { allCompleted, clearCompleted } from './redux/todo/actions'
import addTodoAsync from './redux/todo/thunk/addTodo'

const Header = () => {
  const dispatch = useDispatch()
  let [input, setInput] = useState('')
  const inputChangeHandler = (event) => {
    setInput(event.target.value)
  }

  const addTaksFormHandler = (event) => {
    event.preventDefault()
    if (input.length) {
      dispatch(addTodoAsync(input))
      setInput('')
    } else {
      return false
    }
  }
  const allCompletedHandler = () => {
    dispatch(allCompleted())
  }
  const clearCompletedHandler = () => {
    dispatch(clearCompleted())
  }

  return (
    <div>
      <form
        onSubmit={addTaksFormHandler}
        className='flex items-center bg-gray-100 px-4 py-4 rounded-md'
      >
        <img src={NoteImage} className='w-6 h-6' alt='Add todo' />
        <input
          onChange={inputChangeHandler}
          value={input}
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
        />
        <button
          type='submit'
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li
          onClick={allCompletedHandler}
          className='flex space-x-1 cursor-pointer'
        >
          <img className='w-4 h-4' src={DoubleTick} alt='Complete' />
          <span>Incompleted Tasks</span>
        </li>
        <li onClick={clearCompletedHandler} className='cursor-pointer'>
          Complete All Tasks
        </li>
      </ul>
    </div>
  )
}

export default Header
