import React from 'react'
import Search from './Search'
import logoImg from '../../assets/lws.svg'

const Navbar = () => {
  return (
    <nav className='bg-slate-100 shadow-md'>
      <div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3'>
        <a href='/'>
          <img className='h-10' src={logoImg} alt='Learn with Sumit' />
        </a>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar
