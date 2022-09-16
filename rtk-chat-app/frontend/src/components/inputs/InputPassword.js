import React from 'react'

const InputPassword = ({ title, className = '', ...attributes }) => {
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
    </div>
  )
}

export default InputPassword
