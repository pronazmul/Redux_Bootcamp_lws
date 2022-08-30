import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../../features/filter/filterSlice'
import { useMatch, useNavigate } from 'react-router-dom'

const Search = () => {
  let { search } = useSelector((state) => state.filter)
  let dispatch = useDispatch()
  let [input, setInput] = React.useState(search)

  const match = useMatch('/')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(searched(input))

    if (!match) {
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='outline-none border-none mr-2'
        type='search'
        name='search'
        placeholder='Search'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}

export default Search
