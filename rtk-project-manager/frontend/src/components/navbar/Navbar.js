import React from 'react'
import Logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ search }) => {
  const { user } = useSelector((state) => state.auth)
  const { pathname } = useLocation()

  return (
    <div className='flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75'>
      <img src={Logo} alt='Brand Logo' className='h-10 w-10' />
      {search && (
        <input
          class='flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring'
          type='search'
          placeholder='Search for anything…'
        />
      )}
      <div className='ml-10'>
        <Link
          to='/project'
          className={`mx-2 text-sm font-semibold hover:text-indigo-700 ${
            pathname === '/project' ? 'text-indigo-700' : 'text-gray-600 '
          }`}
        >
          Projects
        </Link>
        <Link
          to='/team'
          className={`mx-2 text-sm font-semibold hover:text-indigo-700 ${
            pathname === '/team' ? 'text-indigo-700' : 'text-gray-600 '
          }`}
        >
          Team
        </Link>
      </div>
      <button className='flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer'>
        <img src={user?.avatar} alt={user?.name} />
      </button>
    </div>
  )
}

export default Navbar
