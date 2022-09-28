import React, { useEffect } from 'react'
import Input from '../inputs/Input'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { useGetTeamsQuery } from '../../features/teams/teamsApi'
import toast from 'react-hot-toast'
import { useAddProjectMutation } from '../../features/projects/projectsApi'
import Loader from '../ui/Loader'
import Error from '../ui/Error'
import SelectOption from '../ui/SelectOption'

const AddProject = ({ modalHandler }) => {
  const { user } = useSelector((state) => state.auth)
  const {
    data: teams = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetTeamsQuery(user?.email)

  const [addProject, { isSuccess: addSuccess, isError: addError }] =
    useAddProjectMutation()

  function addProjectHandler(values, { resetForm }) {
    const selectedTeam = teams.find((t) => t.id === Number(values.teamId))
    values.team.id = selectedTeam?.id
    values.team.name = selectedTeam?.name
    values.team.color = selectedTeam?.color
    values.timestamp = Date.now()
    delete values.teamId

    addProject({ email: user?.email, data: values })
    resetForm()
    modalHandler()
  }

  useEffect(() => {
    if (addSuccess) toast.success('New Project Added!')
    if (addError) toast.error('Failed To add Project')
  }, [addSuccess, addError])

  return (
    <div className='relative selection:max-w-md w-full bg-white  p-6 rounded-lg'>
      <span
        onClick={modalHandler}
        className='absolute right-4 top-2 cursor-pointer'
      >
        <i className=' fa fa-times text-gray-700' />
      </span>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error message={error?.message} />
      ) : (
        isSuccess &&
        teams.length && (
          <Formik
            initialValues={{
              title: '',
              creator: {
                id: user?.id,
                name: user?.name,
                avatar: user?.avatar,
              },
              team: {},
              status: 'backlog',
              teamId: teams[0]?.id,
            }}
            onSubmit={addProjectHandler}
          >
            {({ handleChange, values, handleSubmit }) => (
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='space-y-2'>
                  <Input
                    title='Project Details'
                    name='title'
                    type='text'
                    value={values.title}
                    onChange={handleChange}
                    className='rounded-md '
                    label
                    required
                  />
                  <SelectOption
                    options={teams}
                    optionTitle='name'
                    optionValue='id'
                    title='Select Team'
                    name='teamId'
                    value={values.teamId}
                    onChange={handleChange}
                    className='rounded-md '
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
        )
      )}
    </div>
  )
}

export default AddProject
