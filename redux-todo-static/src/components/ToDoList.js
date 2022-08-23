import React from 'react'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  let todos = useSelector((state) => state.todos)
  let filters = useSelector((state) => state.filters)

  console.table(todos)
  console.table(filters)

  const filterByStatus = (todo) => {
    let { status } = filters
    switch (status) {
      case 'complete':
        return todo.completed
      case 'incomplete':
        return !todo.completed
      default:
        return true
    }
  }

  const filterByColor = (todo) => {
    let { colors } = filters
    if (colors.length > 0) {
      return colors.includes(todo?.color)
    } else {
      return true
    }
  }

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {todos
        .filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => (
          <ToDo todo={todo} key={todo.id} />
        ))}
    </div>
  )
} 

export default ToDoList
