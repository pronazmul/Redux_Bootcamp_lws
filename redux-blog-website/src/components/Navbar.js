import React from 'react'
import lwsLogoSvg from '../assets/images/lws.svg'

const Navbar = () => {
  return (
    <nav className='bg-slate-100 shadow-md'>
      <div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center'>
        <a href='index.html'>
          <img className='h-10' src={lwsLogoSvg} alt='Learn with Sumit' />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
