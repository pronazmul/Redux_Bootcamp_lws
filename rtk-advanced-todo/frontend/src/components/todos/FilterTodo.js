import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTodosQuery } from '../../features/api/apiSlice'
import {
  colorRemoved,
  colorSelected,
  statusSelected,
} from '../../features/filters/filtersSlice'

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return 'No task'
    case 1:
      return '1 task'
    default:
      return `${no_of_todos} tasks`
  }
}

export default function FilterTodo() {
  const { status, colors } = useSelector((state) => state.filter)
  const { data: todos, isLoading, isSuccess, refetch } = useGetTodosQuery({
    status,
    colors,
  })
  const dispatch = useDispatch()

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorRemoved(color))
    } else {
      dispatch(colorSelected(color))
    }
  }

  const handleStatus = (status) => {
    dispatch(statusSelected(status))
  }

  React.useEffect(() => {
    refetch()
  }, [status, colors])

  return (
    <div className='mt-4 flex justify-between text-xs text-gray-500'>
      {isLoading ? (
        <p className='animate-pulse'></p>
      ) : isSuccess && todos.length ? (
        <p>{numberOfTodos(todos.filter((t) => !t.completed).length)} left</p>
      ) : null}
      <ul className='flex space-x-1 items-center text-xs'>
        <li
          onClick={() => handleStatus('all')}
          class={`cursor-pointer ${status === 'all' && 'font-bold'}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus('incomplete')}
          class={`cursor-pointer ${status === 'incomplete' && 'font-bold'}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus('complete')}
          class={`cursor-pointer ${status === 'complete' && 'font-bold'}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes(
            'green'
          ) && 'bg-green-500'}`}
          onClick={() => handleColorChange('green')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes(
            'red'
          ) && 'bg-red-500'}`}
          onClick={() => handleColorChange('red')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes(
            'yellow'
          ) && 'bg-yellow-500'}`}
          onClick={() => handleColorChange('yellow')}
        ></li>
      </ul>
    </div>
  )
}
