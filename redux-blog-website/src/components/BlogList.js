import React from 'react'
import BlogItem from './BlogItem'
import { useSelector } from 'react-redux'

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs)
  const { author, tag } = useSelector((select) => select.filters)
  function filterByAuthor(singleBlog) {
    if (author === 'all') {
      return true
    } else {
      return singleBlog.author === author
    }
  }

  function filterByTag(singleBlog) {
    if (tag === 'all') {
      return true
    } else {
      return singleBlog.tagName === tag
    }
  }

  return (
    <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
      {blogs
        .filter(filterByAuthor)
        .filter(filterByTag)
        .map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
    </div>
  )
}

export default BlogList
