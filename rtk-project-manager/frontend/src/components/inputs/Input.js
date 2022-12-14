import React from 'react'

const Input = ({
  title,
  value,
  error,
  className = '',
  label,
  ...attributes
}) => {
  return (
    <div className='space-y-1 text-left'>
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
        className={`input ${className}
      }`}
      />
      {value && error && <span className='text-xs text-red-400'>{error}</span>}
    </div>
  )
}

export default Input
