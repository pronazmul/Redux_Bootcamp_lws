import React from 'react'
import moment from 'moment'
import Dropdown from '../ui/Dropdown'
import { teamOptions } from './../../utils/config'
import Modal from './../ui/Modal'
import DeleteTeam from './DeleteTeam'
import AddUser from './AddUser'
import { useGetUsersQuery } from '../../features/users/usersApi'

const TeamItem = ({ team }) => {
  const { name, color, description, timestamp } = team
  const { data: users = [] } = useGetUsersQuery()

  const [option, setOption] = React.useState('')
  const [deleteModal, setDeleteModal] = React.useState(false)
  const [addUserModal, setAddUserModal] = React.useState(false)

  React.useEffect(() => {
    if (option === 'delete') setDeleteModal(true)
    if (option === 'add') setAddUserModal(true)
  }, [option])

  function handleClose() {
    setOption('')
    setAddUserModal(false)
    setDeleteModal(false)
  }

  return (
    <>
      {deleteModal && (
        <Modal open={deleteModal} modalHandler={handleClose}>
          <DeleteTeam id={team.id} />
        </Modal>
      )}

      {addUserModal && (
        <Modal open={addUserModal} modalHandler={handleClose}>
          <AddUser team={team} />
        </Modal>
      )}

      <div
        className='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
        draggable='true'
      >
        <button className='absolute top-0 right-0 flex items-center justify-center  w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex'>
          <Dropdown options={teamOptions} setOption={setOption}>
            <svg
              className='w-4 h-4 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
            </svg>
          </Dropdown>
        </button>
        <div
          className={`flex items-center h-6 px-3 text-xs font-semibold rounded-full capitalize  ${color} bg-opacity-20`}
        >
          {name}
        </div>
        <h4 className='mt-3 text-sm font-medium'>{description}</h4>
        <div className='flex items-center w-full mt-3 text-xs font-medium text-gray-400 relative'>
          <div className='flex items-center'>
            <svg
              className='w-4 h-4 text-gray-300 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clipRule='evenodd'
              />
            </svg>
            <span className='ml-1 leading-none'>
              {moment(timestamp).format('ll')}
            </span>

            <div className='absolute flex -space-x-2 right-1'>
              {users.length &&
                users
                  .filter((user) => team.assigned.includes(user.email))
                  .map((user) => (
                    <img
                      class='w-6 h-6 rounded-full'
                      src={user?.avatar}
                      alt={user?.name}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamItem
