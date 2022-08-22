import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from './redux/filter/actions'

const Bannar = () => {
  const dispatch = useDispatch()
  const { author, tag } = useSelector((select) => select.filters)

  function filterResetHandler() {
    dispatch(resetFilter())
  }

  return (
    <div className='text-center'>
      <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
        ALL BLOGS ARE HERE
      </h2>
      <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>

      {(author !== 'all' || tag !== 'all') && (
        <p
          onClick={filterResetHandler}
          className=' text-right text-sm font-medium text-indigo-600 ml-auto'
        >
          <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer'>
            Reset Filter
          </span>
        </p>
      )}
    </div>
  )
}

export default Bannar
