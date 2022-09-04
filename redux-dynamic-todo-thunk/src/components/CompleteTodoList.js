import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const CompleteTodoList = () => {
  const todos = useSelector((state) => state.todos)

  const filterCompleted = (todo) => {
    return todo.completed
  }

  return (
    <div>
      <p className='text-xs text-gray-500'>Completed Tasks</p>
      <hr className='mt-4' />

      <div className='text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
        {todos
          .filter(filterCompleted)
          .map((todo) => (
            <Todo todo={todo} key={todo._id} />
          ))}
      </div>
    </div>
  )
}

export default CompleteTodoList
