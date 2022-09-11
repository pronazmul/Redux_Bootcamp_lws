import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import tickImage from '../../assets/images/double-tick.png'
import noteImage from '../../assets/images/notes.png'
import plusImage from '../../assets/images/plus.png'
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from '../../features/api/apiSlice'

export default function AddTodo() {
  const filter = useSelector((state) => state.filter)
  const { data: todos, refetch } = useGetTodosQuery(filter)
  const [addTodo] = useAddTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const [input, setInput] = useState('')
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const addTodoHandler = async (e) => {
    e.preventDefault()
    if (!input) {
      toast.error('You have nothing to add')
      return
    }
    let data = {
      text: input,
      completed: false,
      color: '',
    }
    try {
      await addTodo(data)
      toast.success('Todo added!')
    } catch (error) {
      toast.error('Failed to add todo!')
    }
  }

  const completeAllHandler = () => {
    let uncompleted = todos.filter((todo) => !todo.completed)
    if (!uncompleted.length) {
      toast.error('Nothing to mark as complited')
      return
    } else {
      uncompleted.forEach(async (todo) => {
        await updateTodo({ id: todo.id, data: { ...todo, completed: true } })
      })
    }
  }

  const clearCompletedHandler = () => {
    let completed = todos.filter((todo) => todo.completed)
    if (!completed.length) {
      toast.error('Nothing to Cleared')
      return
    } else {
      completed.forEach(async (todo) => {
        await deleteTodo(todo.id)
      })
    }
  }

  const { status, colors } = filter
  React.useEffect(() => {
    refetch()
  }, [status, colors])

  return (
    <div>
      <form
        className='flex items-center bg-gray-100 px-4 py-4 rounded-md'
        onSubmit={addTodoHandler}
      >
        <img src={noteImage} className='w-6 h-6' alt='Add todo' />
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
          value={input}
          onChange={handleInput}
        />
        <button
          type='submit'
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>
      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li
          className='flex space-x-1 cursor-pointer'
          onClick={completeAllHandler}
        >
          <img className='w-4 h-4' src={tickImage} alt='Complete' />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearCompletedHandler} className='cursor-pointer'>
          Clear Complited
        </li>
      </ul>
    </div>
  )
}
