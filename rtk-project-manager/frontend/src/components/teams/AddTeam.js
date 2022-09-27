import React, { useEffect } from 'react'
import Input from './../inputs/Input'
import { Formik } from 'formik'
import ColorInput from './../inputs/ColorInput'
import { useSelector } from 'react-redux'
import { useAddTeamMutation } from '../../features/teams/teamsApi'
import toast from 'react-hot-toast'

const AddTeam = ({ modalHandler }) => {
  const { user } = useSelector((state) => state.auth)
  const [addTeam, { isSuccess, isError }] = useAddTeamMutation()
  function addTeamHandler(values, { resetForm }) {
    values.assigned.push(user?.email)
    values.timestamp = Date.now()
    addTeam({ email: user?.email, data: values })
    resetForm()
    modalHandler()
  }

  useEffect(() => {
    if (isSuccess) toast.success('Add Team Successfully!')
    if (isError) toast.error('Failed to Add Team')
  }, [isSuccess, isError])

  return (
    <div className='relative selection:max-w-md w-full bg-white  p-6 rounded-lg'>
      <span
        onClick={modalHandler}
        className='absolute right-4 top-2 cursor-pointer'
      >
        <i className=' fa fa-times text-gray-700' />
      </span>

      <Formik
        initialValues={{
          name: '',
          description: '',
          color: '#ed64a6',
          assigned: [],
        }}
        onSubmit={addTeamHandler}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-2'>
              <Input
                title='Team Name'
                name='name'
                type='text'
                value={values.name}
                onChange={handleChange}
                className='rounded-md '
                label
                required
              />
              <Input
                title='Team Title'
                name='description'
                type='text'
                value={values.description}
                onChange={handleChange}
                className='rounded-md'
                label
                required
              />
              <ColorInput
                title='Select Color'
                name='color'
                type='color'
                value={values.color}
                onChange={handleChange}
                className='rounded-md'
                label
                required
              />
            </div>

            <div>
              <button type='submit' className='form-btn uppercase'>
                Add Team
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddTeam
