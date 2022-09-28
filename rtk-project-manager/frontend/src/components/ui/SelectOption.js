import React from 'react'

const SelectOption = ({
  options,
  optionTitle,
  optionValue,
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
      <select className={`input ${className}`} value={value} {...attributes}>
        <option value=''>Select One</option>
        {options.map((option) => (
          <option key={option[optionValue]} value={option[optionValue]}>
            {option[optionTitle]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectOption
