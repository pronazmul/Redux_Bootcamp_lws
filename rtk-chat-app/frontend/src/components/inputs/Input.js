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
    <div>
      {label && (
        <label className='text-sm font-semibold text-gray-500'> {title}</label>
      )}
      <input
        placeholder={title}
        {...attributes}
        className={`input ${className}
      }`}
      />
      {value && error && <span className='text-xs text-red-400'>{error}</span>}
    </div>
  )
}

export default Input
