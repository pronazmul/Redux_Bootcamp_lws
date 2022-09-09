import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageSelected } from '../../features/filter/filterSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  const {
    totalCount: totalData,
    page: currentPage,
    pages: p,
    entities,
  } = useSelector((state) => state.filter)

  const { transactions } = useSelector((state) => state.transaction)

  const pages = [...Array(p)].map((x, y) => y + 1)

  function setCurrentPage(page) {
    dispatch(pageSelected(page))
  }

  return (
    <div className='p-4 border-t border-gray-300 bg-white'>
      <div className='flex justify-between items-baseline'>
        <div className=''>
          <p className='text-gray-500 text-xs lg:text-sm'>
            {`Showing ${entities * currentPage - entities || 1} to ${
              entities * currentPage > totalData
                ? totalData
                : entities * currentPage
            }
            of ${totalData} Entities`}
          </p>
        </div>
        <div className='flex justify-end items-baseline select-none'>
          <button
            className={`h-9 w-9 flex justify-center items-center relative transition duration-300 text-gray-500  ${
              currentPage === 1
                ? 'cursor-not-allowed'
                : 'rounded-full cursor-pointer hover:text-primary hover:bg-gray-200'
            }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            <i className='fas fa-chevron-left' />
          </button>
          {pages.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`h-9 w-9 flex justify-center items-center relative transition duration-300 text-gray-500 rounded-full cursor-pointer hover:text-primary hover:bg-gray-200 ${
                item === currentPage && 'text-primary bg-gray-200 font-bold'
              }`}
            >
              <p>{item}</p>
            </button>
          ))}
          <button
            className={`h-9 w-9 flex justify-center items-center relative transition duration-300 text-gray-500  ${
              currentPage === pages.length
                ? 'cursor-not-allowed'
                : 'rounded-full cursor-pointer hover:text-primary hover:bg-gray-200'
            }`}
            onClick={() =>
              currentPage < pages.length && setCurrentPage(currentPage + 1)
            }
          >
            <i className='fas fa-chevron-right' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
