import React from 'react'

const Checkbox = ({ title, name, ...attributes }) => {
  return (
    <div class='flex items-center'>
      <input
        id={name}
        name={name}
        type='checkbox'
        {...attributes}
        class='check-box'
      />
      <label for={name} class='ml-2 block text-sm text-gray-900 cursor-pointer'>
        {title}
      </label>
    </div>
  )
}

export default Checkbox
