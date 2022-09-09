import React from 'react'
import { useDispatch } from 'react-redux'
import { DebounceInput } from 'react-debounce-input'
import { searched } from '../../features/filter/filterSlice'

const Search = () => {
  let dispatch = useDispatch()
  let [input, setInput] = React.useState('')
  function handleChange(event) {
    setInput(event.target.value)
  }
  React.useEffect(() => {
    dispatch(searched(input))
  }, [input])

  return (
    <div className='search-form-group'>
      <DebounceInput
        type='text'
        name='search'
        debounceTimeout={500}
        onChange={handleChange}
        placeholder='Search ...'
      />
    </div>
  )
}

export default Search
