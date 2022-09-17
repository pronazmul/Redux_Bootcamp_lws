import { Link } from 'react-router-dom'
import logoImage from '../../assets/lws-logo-dark.svg'
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '../../features/auth/authSlice'
import { toast } from 'react-hot-toast'

export default function Navigation() {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(userLoggedOut())
    localStorage.removeItem('auth')
    toast.success('User Loggedout')
  }

  return (
    <nav className='border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between h-16 items-center'>
          <Link to='/'>
            <img className='h-10' src={logoImage} alt='Learn with Sumit' />
          </Link>
          <ul>
            <li className='text-white'>
              <span onClick={logout} className='cursor-pointer'>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
