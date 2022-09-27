import React, { useEffect } from 'react'
import Input from './../inputs/Input'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { useAddTeamMutation } from '../../features/teams/teamsApi'
import toast from 'react-hot-toast'
import { colors } from './../../utils/config'

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
          color: colors[0],
          assigned: [],
        }}
        onSubmit={addTeamHandler}
      >
        {({ handleChange, values, handleSubmit, setFieldValue }) => (
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
              <div className='space-y-1 text-left'>
                <label className='text-sm uppercase font-semibold text-gray-500 ml-2'>
                  Select Color
                </label>
                <div className='flex space-x-2 justify-center'>
                  {colors.map((c, idx) => {
                    return (
                      <span
                        onClick={() => setFieldValue('color', c)}
                        key={idx}
                        className={`bg-${c}-500 h-7 w-7 rounded-full cursor-pointer ${
                          values.color === c && ` border-2 border-gray-300`
                        }`}
                      ></span>
                    )
                  })}
                </div>
              </div>
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
