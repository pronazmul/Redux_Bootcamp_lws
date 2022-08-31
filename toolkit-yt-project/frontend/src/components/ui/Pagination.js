import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pageSelected } from '../../features/pagination/paginationSlice'

const Pagination = () => {
  const { pages, page } = useSelector((state) => state.pagination)
  const dispatch = useDispatch()

  function handleSelectPage(pageNo) {
    dispatch(pageSelected(pageNo))
  }

  return (
    <section className='pt-12'>
      <div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end'>
        {[...Array(pages).keys()].map((p) => (
          <div
            onClick={() => handleSelectPage(p + 1)}
            className={`${
              page === p + 1
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-500'
            } px-4 py-1 rounded-full cursor-pointer`}
          >
            {p + 1}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pagination
