import React from 'react'

const InputPassword = ({
  title,
  value,
  error,
  className = '',
  label,
  ...attributes
}) => {
  const [inputType, setInputType] = React.useState('password')

  function inputTypeToggler() {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <div className='relative'>
      {label && (
        <label className='text-sm font-semibold text-gray-500'> {title}</label>
      )}
      <span className='absolute right-3 top-2 text-gray-400 cursor-pointer z-10'>
        {inputType === 'password' ? (
          <i onClick={inputTypeToggler} className='far fa-eye-slash' />
        ) : (
          <i onClick={inputTypeToggler} className='far fa-eye' />
        )}
      </span>
      <input
        type={inputType}
        placeholder={title}
        {...attributes}
        className={`input ${className}
      }`}
      />
      {value && error && <span className='text-xs text-red-400'>{error}</span>}
    </div>
  )
}

export default InputPassword
