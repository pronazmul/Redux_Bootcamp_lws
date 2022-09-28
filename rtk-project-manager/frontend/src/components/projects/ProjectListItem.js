import moment from 'moment'
import React from 'react'
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux'
import { ITEM_TYPE } from '../../utils/config'
import Modal from '../ui/Modal'
import DeleteProject from './DeleteProject'

const ProjectListItem = ({ project: item, editable }) => {
  const { filtered } = useSelector((state) => state.projects)

  const {
    id,
    title,
    timestamp,
    team: { name, color },
    creator: { avatar, name: cName },
  } = item

  const [{ isDrugging }, drag] = useDrag({
    item: { type: ITEM_TYPE, ...item },
    collect: (monitor) => ({
      isDrugging: monitor.isDragging(),
    }),
  })

  const [deleteModal, setDeleteModal] = React.useState(false)

  const searchStyle = filtered.includes(id)
    ? `animate-pulse border-2 border-red-500`
    : ``

  return (
    <>
      {deleteModal && (
        <Modal
          open={deleteModal}
          modalHandler={() => setDeleteModal(!deleteModal)}
        >
          <DeleteProject id={id} />
        </Modal>
      )}
      <div
        ref={drag}
        className={`relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer group hover:bg-opacity-100 ${searchStyle}`}
        draggable='true'
      >
        {editable && (
          <button
            onClick={() => setDeleteModal(true)}
            className='absolute top-0 right-0 items-center flex justify-center  w-5 h-5 mt-3 mr-2 text-red-500  hover:bg-red-100 group-hover:flex text-xs  rounded-full hover:animate-bounce  p-4'
          >
            <i className='fa fa-trash-alt'></i>
          </button>
        )}
        <span
          className={`flex items-center h-6 px-3 text-xs font-semibold ${color} bg-opacity-20 rounded-full`}
        >
          {name}
        </span>
        <h4 className={`mt-3 text-sm font-medium `}>{title}</h4>
        <div className='flex items-center w-full mt-3 text-xs font-medium text-gray-400'>
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
          </div>
          <img
            className='w-6 h-6 ml-auto rounded-full'
            src={avatar}
            alt={cName}
          />
        </div>
      </div>
    </>
  )
}

export default ProjectListItem
