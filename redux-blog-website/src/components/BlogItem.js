import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleByAuthor, toggleByTag } from './redux/filter/actions'

const BlogItem = ({ blog }) => {
  let dispatch = useDispatch()
  let { author, tag } = useSelector((select) => select.filters)

  function authorToggleHandler(authorName) {
    if (authorName === author) {
      dispatch(toggleByAuthor(authorName, 'remove'))
    } else {
      dispatch(toggleByAuthor(authorName, 'add'))
    }
  }
  function tagToggleHandler(tagName) {
    if (tagName === tag) {
      dispatch(toggleByTag(tagName, 'remove'))
    } else {
      dispatch(toggleByTag(tagName, 'add'))
    }
  }

  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={blog.image} alt='' />
      </div>

      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p
            onClick={() => tagToggleHandler(blog.tagName)}
            className='text-sm font-medium text-indigo-600'
          >
            <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer'>
              {blog.tagName}
            </span>
          </p>
          <a href='#' className='block mt-1'>
            <p className='text-xl font-semibold text-gray-900'>{blog.title}</p>
          </a>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <img
              className='h-10 w-10 rounded-full'
              src={blog.authorAvatar}
              alt=''
            />
          </div>
          <div className='ml-3'>
            <p
              onClick={() => authorToggleHandler(blog.author)}
              className='text-sm font-medium text-gray-900 hover:underline cursor-pointer'
            >
              {blog.author}
            </p>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time>{blog.createdAt} </time>
              <span aria-hidden='true'> &middot; </span>
              <span> {blog.timeToRead} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
