import React from 'react'
import SearchIconSvg from '../assets/images/search.svg'
import { useDispatch } from 'react-redux'
import { blogSearch } from './redux/blogs/action'
import { DebounceInput } from 'react-debounce-input'

const SearchBar = () => {
  let dispatch = useDispatch()
  let [input, setInput] = React.useState('')

  function handleChange(event) {
    setInput(event.target.value)
  }

  React.useEffect(() => {
    dispatch(blogSearch(input))
  }, [input, dispatch])

  return (
    <div className='border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200'>
      <DebounceInput
        type='text'
        name='search'
        debounceTimeout={500}
        onChange={handleChange}
        placeholder='Search by blog title...'
        className='outline-none border-none bg-gray-50 h-full w-full mr-2'
      />
      <img
        className='inline h-6 cursor-pointer'
        src={SearchIconSvg}
        alt='Search'
      />
    </div>
  )
}

export default SearchBar
