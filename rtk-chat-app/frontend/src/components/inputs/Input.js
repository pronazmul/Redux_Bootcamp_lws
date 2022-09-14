import React from 'react'

const Input = ({ title, rounded, ...attributes }) => {
  console.log({ rounded })
  return (
    <input
      placeholder={title}
      {...attributes}
      class={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm ${
        rounded && `rounded-${rounded}-md`
      }`}
    />
  )
}

export default Input
