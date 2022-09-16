import React from 'react'

const TextArea = ({ title, className, ...attributes }) => {
  return (
    <textarea
      placeholder={title}
      {...attributes}
      class={`input ${className}`}
    />
  )
}

export default TextArea
