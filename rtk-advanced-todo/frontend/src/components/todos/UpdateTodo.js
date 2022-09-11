import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useUpdateTodoMutation } from '../../features/api/apiSlice'

const UpdateTodo = ({ todo, setEdit }) => {
  const [updateTodo] = useUpdateTodoMutation()
  const { id, text } = todo
  let [input, setInput] = useState(text)

  function handleChange(e) {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateTodo({ id, data: { ...todo, text: input } })
      toast.success('Todo Updated!')
      setEdit(false)
    } catch (error) {
      toast.error('Failed to Update!')
    }
  }

  return (
    <div className='bg-white p-4 rounded-lg'>
      <h2 className='my-2'>Update Todo</h2>
      <form
        onSubmit={handleSubmit}
        className=' w-full flex justify-between space-x-2 rounded'
      >
        <input
          type='text'
          className='w-full text-md  border-none outline-none text-gray-500 py-2 rounded'
          value={input}
          onChange={handleChange}
        />
      </form>
      <div className='space-x-2 mt-4'>
        <button
          onClick={() => setEdit(false)}
          className='px-4 py-1.5 text-sm rounded bg-gray-400 hover:bg-gray-500'
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className='px-4 py-1.5 text-sm rounded bg-green-400 hover:bg-green-500'
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default UpdateTodo
