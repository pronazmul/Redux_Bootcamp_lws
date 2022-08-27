import React from 'react'
import { useSelector } from 'react-redux'
import ToDo from './ToDo'
import NoteImage from '../assets/images/notes.png'

const CompletedTodoList = () => {
  let todos = useSelector((state) => state.todos)

  const filterByCompleted = (todo) => {
    return todo.completed
  }

  return (
    <div>
      <ul className='flex justify-between mt-2 text-xs text-gray-500 my-4'>
        <li className='flex space-x-1 cursor-pointer'>
          <img src={NoteImage} className='w-4 h-4' alt='Complete' />
          <span>Completed Taks</span>
        </li>
        <li className='cursor-pointer'>Clear completed</li>
      </ul>
      {todos.filter(filterByCompleted).map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default CompletedTodoList
