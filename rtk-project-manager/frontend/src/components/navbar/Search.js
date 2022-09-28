import React from 'react'
import { useDispatch } from 'react-redux'
import { useGetProjectsQuery } from '../../features/projects/projectsApi'
import { searchProject } from '../../features/projects/projectsSlice'
import debounce from '../../utils/debounce'
import searchInJsonArray from '../../utils/searchInJsonArray'

const Search = () => {
  const dispatch = useDispatch()
  const { data: projects = [] } = useGetProjectsQuery()
  const [input, setInput] = React.useState('')
  const handleInput = debounce(setInput, 500)

  React.useEffect(() => {
    let filtered = searchInJsonArray(input, projects, [
      'team',
      'creator',
      'status',
      'timestamp',
      'id',
    ]).map((filtered) => filtered.id)

    if (projects.length && input && filtered.length) {
      console.log('dlfkjsd')
      dispatch(searchProject(filtered))
    }
    if (!input) dispatch(searchProject([]))
  }, [projects, input, dispatch])

  return (
    <input
      className='flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring'
      type='text'
      name='search'
      onChange={(e) => handleInput(e.target.value)}
      placeholder='Search For Projects'
    />
  )
}

export default Search
