import React from 'react'

const Checkbox = ({ title, name, ...attributes }) => {
  return (
    <div className='flex items-center'>
      <input
        id={name}
        name={name}
        type='checkbox'
        {...attributes}
        className='check-box'
      />
      <label
        for={name}
        className='ml-2 block text-sm text-gray-900 cursor-pointer'
      >
        {title}
      </label>
    </div>
  )
}

export default Checkbox
