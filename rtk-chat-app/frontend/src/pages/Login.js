import React from 'react'
import logoImage from '../assets/lws-logo-light.svg'
import Input from '../components/inputs/Input'

const Login = () => {
  return (
    <div class='grid place-items-center h-screen bg-[#F9FAFB'>
      <div class='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div class='max-w-md w-full space-y-8'>
          <div>
            <img
              class='mx-auto h-12 w-auto'
              src={logoImage}
              alt='Learn with sumit'
            />
            <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <form class='mt-8 space-y-6'>
            <div>
              <Input
                title='Email Address'
                name='email'
                type='email'
                rounded='t'
                required
              />
              <Input
                title='Password'
                name='password'
                type='password'
                rounded='b'
                required
              />
            </div>
            <div>
              <button type='submit' class='form-btn'>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
