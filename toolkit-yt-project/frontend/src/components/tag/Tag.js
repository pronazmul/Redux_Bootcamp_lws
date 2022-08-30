import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice'

const Tag = ({ title }) => {
  const dispatch = useDispatch()
  const { tags } = useSelector((state) => state.filter)
  let isSelected = tags.includes(title)

  function handleTagTogger() {
    if (isSelected) {
      dispatch(tagRemoved(title))
    } else {
      dispatch(tagSelected(title))
    }
  }

  return (
    <div
      onClick={handleTagTogger}
      className={`${
        isSelected ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-500'
      } px-4 py-1 rounded-full cursor-pointer`}
    >
      {title}
    </div>
  )
}

export default Tag
