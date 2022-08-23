import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChanged, statusChange } from './redux/filter/actions'

function takCounter(taskLength) {
  switch (taskLength) {
    case 0:
      return 'No taks left'
    case 1:
      return `${taskLength} task`
    default:
      return `${taskLength} tasks`
  }
}

const Footer = () => {
  let { todos, filters } = useSelector((state) => state)

  let remainingTaks = todos.filter((todo) => !todo.completed).length
  let dispatch = useDispatch()

  function statusChangeHandler(status) {
    dispatch(statusChange(status))
  }

  function colorChangeHandler(color) {
    let exists = filters.colors.includes(color)
    if (exists) {
      dispatch(colorChanged(color, 'remove'))
    } else {
      dispatch(colorChanged(color, 'add'))
    }
  }

  return (
    <div className='mt-4 flex justify-between text-xs text-gray-500'>
      <p>{takCounter(remainingTaks)} left</p>
      <ul className='flex space-x-1 items-center text-xs'>
        <li
          onClick={() => statusChangeHandler('all')}
          className={`cursor-pointer ${
            filters.status === 'all' && 'font-bold'
          }`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => statusChangeHandler('incomplete')}
          className={`cursor-pointer ${
            filters.status === 'incomplete' && 'font-bold'
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => statusChangeHandler('complete')}
          className={`cursor-pointer ${
            filters.status === 'complete' && 'font-bold'
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => colorChangeHandler('green')}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes('green') && 'bg-green-500'
          }`}
        ></li>
        <li
          onClick={() => colorChangeHandler('red')}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes('red') && 'bg-red-500'
          }`}
        ></li>
        <li
          onClick={() => colorChangeHandler('yellow')}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes('yellow') && 'bg-yellow-500'
          }`}
        ></li>
      </ul>
    </div>
  )
}

export default Footer
