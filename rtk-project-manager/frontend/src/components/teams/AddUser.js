import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../ui/Loader'
import Error from '../ui/Error'
import { useGetUsersQuery } from '../../features/users/usersApi'
import { useEditTeamMutation } from '../../features/teams/teamsApi'
import toast from 'react-hot-toast'

const AddUser = ({ modalHandler, team: teamDetails }) => {
  const [updateTeam, { isSuccess: updateSuccess, isError: updateError }] =
    useEditTeamMutation()

  const { user: auth } = useSelector((state) => state.auth)
  const {
    data: users = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetUsersQuery()
  const [team, setTeam] = React.useState(teamDetails || {})

  function addToTeam(email) {
    setTeam({ ...team, assigned: [...team.assigned, email] })
  }

  function removeFromTeam(email) {
    if (auth.email === email) return false
    setTeam({
      ...team,
      assigned: [...team.assigned.filter((mail) => mail !== email)],
    })
  }

  function handleUpdate() {
    updateTeam({ id: team.id, email: auth.email, data: team })
  }

  React.useEffect(() => {
    if (updateSuccess) {
      toast.success('User Updated!')
      modalHandler()
    }
    if (updateError) {
      toast.error('Failed to assigned User!')
      modalHandler()
    }
  }, [updateSuccess, updateError, modalHandler])

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
        users.length && (
          <div className='space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-sm uppercase font-semibold text-gray-500 ml-2 text-left'>
                Current Users
              </h1>
              <hr />
              <div className='grid grid-cols-5 gap-1'>
                {users
                  .filter((user) => team.assigned.includes(user.email))
                  .map((user) => (
                    <div
                      key={user?.id}
                      className='space-y-1 p-2 shadow-lg rounded-lg cursor-pointer relative'
                      onClick={() => removeFromTeam(user.email)}
                    >
                      <span
                        onClick={() => removeFromTeam(user.email)}
                        className={`absolute right-0.5 top-0.5 cursor-pointer text-xs py-0.5  px-1.5 bg-red-400 text-white rounded-full ${
                          auth.email === user.email && 'hidden'
                        }`}
                      >
                        <i className=' fa fa-times ' />
                      </span>
                      <img
                        className='mx-auto h-12 w-auto rounded-full'
                        src={user?.avatar}
                        alt='Learn with sumit'
                      />
                      <h2 className='text-xs text-center text-gray-400 '>
                        {user?.name}
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
            <div className='space-y-2'>
              <h1 className='text-sm uppercase font-semibold text-gray-500 ml-2 text-left'>
                Add From Available
              </h1>
              <hr />
              <div className='grid grid-cols-5 gap-1'>
                {users
                  .filter((user) => !team.assigned.includes(user.email))
                  .map((user) => (
                    <div
                      key={user?.id}
                      className='space-y-1 p-2 shadow-lg rounded-lg cursor-pointer '
                      onClick={() => addToTeam(user.email)}
                    >
                      <img
                        className='mx-auto h-12 w-auto rounded-full'
                        src={user?.avatar}
                        alt='Learn with sumit'
                      />
                      <h2 className='text-xs text-center text-gray-400 '>
                        {user?.name}
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
            <div className='space-x-4'>
              <button
                className='bg-gray-500 hover:bg-gray-600  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center'
                onClick={modalHandler}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className='bg-red-500 hover:bg-red-700  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center'
              >
                Update
              </button>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default AddUser
