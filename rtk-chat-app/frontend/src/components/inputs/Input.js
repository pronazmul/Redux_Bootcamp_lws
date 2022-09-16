import React from 'react'

const Input = ({ title, className = '', ...attributes }) => {
  return (
    <input
      placeholder={title}
      {...attributes}
      className={`input ${className}
      }`}
    />
  )
}

export default Input
