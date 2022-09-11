import React from 'react'
import { useSelector } from 'react-redux'
import { useGetTodosQuery } from '../../features/api/apiSlice'
import TodoItem from './TodoItem'

export default function Todos() {
  const filter = useSelector((state) => state.filter)
  const { data: todos, isLoading, isError, refetch } = useGetTodosQuery(filter)

  const { status, colors } = filter
  React.useEffect(() => {
    refetch()
  }, [status, colors])
  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {isLoading ? (
        <p>Loading......</p>
      ) : isError ? (
        <p>Semething went Wrong</p>
      ) : todos.length === 0 ? (
        <p>You don't have any todos</p>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </div>
  )
}
