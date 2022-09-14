import React from 'react'

const Checkbox = ({ title, name }) => {
  return (
    <div class='flex items-center'>
      <input
        id={name}
        name={name}
        type='checkbox'
        class='h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded'
      />
      <label for={name} class='ml-2 block text-sm text-gray-900 cursor-pointer'>
        {title}
      </label>
    </div>
  )
}

export default Checkbox
