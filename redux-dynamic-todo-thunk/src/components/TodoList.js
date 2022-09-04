import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchTodos from '../redux/todos/thunk/fetchTodos'
import Todo from './Todo'

export default function TodoList() {
  const todos = useSelector((state) => state.todos)
  const { colors } = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  const filterByStatus = (todo) => {
    return !todo.completed
  }

  const filterByColors = (todo) => {
    return colors.length ? colors.includes(todo.color) : true
  }

  useEffect(() => {
    dispatch(fetchTodos)
  }, [dispatch])

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo._id} />
        ))}
    </div>
  )
}
