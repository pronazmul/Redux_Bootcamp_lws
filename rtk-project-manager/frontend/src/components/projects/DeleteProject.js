import React from 'react'
import toast from 'react-hot-toast'
import { useDeleteProjectMutation } from '../../features/projects/projectsApi'

const DeleteProject = ({ modalHandler, id }) => {
  const [deleteProject, { isSuccess, isError }] = useDeleteProjectMutation()

  function deleteHandler() {
    deleteProject(id)
  }

  React.useEffect(() => {
    if (isSuccess) {
      toast.success('Deleted!')
      modalHandler()
    }
    if (isError) {
      toast.error('Failed to Add Team')
      modalHandler()
    }
  }, [isSuccess, isError, modalHandler])

  return (
    <div className='m-2 bg-white rounded-lg shadow-lg overflow-hidden pb-4'>
      <div className='bg-indigo-500 p-8 rounded-b-full rounded-t-2xl'>
        <span>
          <i className='fa fa-times text-5xl text-red-500'></i>
        </span>
        <h1 className='text-white text-2xl font-black'>Are you sure ? </h1>
      </div>
      <div className='py-6 space-y-4 px-8'>
        <p className='text-sm text-gray-600'>
          Do you really want to delete these record? This process cannot be
          undone.
        </p>
        <div className='space-x-4'>
          <button
            className='bg-gray-500  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center font-black'
            onClick={modalHandler}
          >
            Cancel
          </button>
          <button
            className='bg-red-400  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center font-black'
            onClick={deleteHandler}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProject
