import React from 'react'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  let todos = useSelector((state) => state.todos)
  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default ToDoList
