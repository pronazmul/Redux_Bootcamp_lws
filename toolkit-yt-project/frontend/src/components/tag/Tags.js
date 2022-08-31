import React from 'react'
import Tag from './Tag'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from './../../features/tags/tagsSlice'
import { resetFilter } from '../../features/filter/filterSlice'

const Tags = () => {
  const dispatch = useDispatch()
  const { tags } = useSelector((state) => state.tags)
  const { tags: t, search, author } = useSelector((state) => state.filter)

  React.useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])

  function handleResetFilter() {
    dispatch(resetFilter())
  }

  return tags.length ? (
    <section className='flex items-center justify-between border-b overflow-y-auto gap-4'>
      <div className=' px-5 py-6 lg:px-0 flex gap-2'>
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
      <div
        className={`${
          t.length || search || author ? 'inline-block' : 'hidden'
        }  `}
      >
        <button
          onClick={handleResetFilter}
          className=' bg-red-600 text-white hover:bg-red-100 hover:text-red-500  px-4 py-1 rounded-full cursor-pointer'
        >
          Reset Filter
        </button>
      </div>
    </section>
  ) : null
}

export default Tags
