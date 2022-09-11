import React from 'react'
import cancelImage from '../../assets/images/cancel.png'
import UpdateTodo from './UpdateTodo'
import EditIcon from '../../assets/Icons/EditIcon'
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../features/api/apiSlice'
import toast from 'react-hot-toast'
import Modal from './../ui/Modal'

export default function TodoItem({ todo }) {
  const { id, text, completed, color } = todo
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  const [edit, setEdit] = React.useState(false)

  const handleColorChange = async (color) => {
    try {
      await updateTodo({ id, data: { ...todo, color } })
      toast.success(`Color set to ${color}`)
    } catch (error) {
      toast.error('Failed to Update!')
    }
  }
  const handleCompleted = async () => {
    try {
      await updateTodo({ id, data: { ...todo, completed: !completed } })
      toast.success(completed ? 'Marked as undone!' : 'Mark as Done!')
    } catch (error) {
      toast.error('Failed to Update!')
    }
  }
  const handleDelete = async () => {
    try {
      await deleteTodo(id)
      toast.success('Todo Deleted')
    } catch (error) {
      toast.error('Failed to Delete')
    }
  }

  return (
    <>
      {edit && (
        <Modal open={edit} modalHandler={setEdit}>
          <UpdateTodo setEdit={setEdit} todo={todo} />
        </Modal>
      )}
      <div className=' flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0'>
        <div
          className={`  relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed &&
            'border-green-500 focus-within:border-green-500'}`}
        >
          <input
            type='checkbox'
            checked={completed}
            onChange={handleCompleted}
            className='opacity-0 absolute rounded-full'
          />
          {completed && (
            <svg
              className='fill-current w-3 h-3 text-green-500 pointer-events-none cursor-pointer'
              viewBox='0 0 20 20'
            >
              <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
            </svg>
          )}
        </div>
        <div className={`select-none flex-1 ${completed && 'line-through'}`}>
          {text}
        </div>
        <div
          onClick={() => setEdit(true)}
          className={`h-4 w-4 text-gray-500 cursor-pointer ${completed &&
            'hidden'}`}
        >
          <EditIcon />
        </div>
        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${color ===
            'green' && 'bg-green-500'}`}
          onClick={() => handleColorChange('green')}
        ></div>
        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color ===
            'yellow' && 'bg-yellow-500'}`}
          onClick={() => handleColorChange('yellow')}
        ></div>
        <div
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${color ===
            'red' && 'bg-red-500'}`}
          onClick={() => handleColorChange('red')}
        ></div>
        <img
          src={cancelImage}
          className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer'
          alt='Cancel'
          onClick={handleDelete}
        />
      </div>
    </>
  )
}
