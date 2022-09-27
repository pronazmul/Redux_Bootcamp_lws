import React from 'react'

const ColorInput = ({ title, value, error, label, ...attributes }) => {
  return (
    <div className='space-x-2 text-left flex  items-center mt-2 '>
      {label && (
        <label className='text-sm uppercase font-semibold text-gray-500 ml-2'>
          {' '}
          {title}
        </label>
      )}
      <input
        placeholder={title}
        value={value}
        {...attributes}
        className=' w-2/5 rounded-lg  p-0.5'
      />
      {value && error && <span className='text-xs text-red-400'>{error}</span>}
    </div>
  )
}

export default ColorInput
