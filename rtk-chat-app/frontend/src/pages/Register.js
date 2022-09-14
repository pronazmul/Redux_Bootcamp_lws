import React from 'react'
import logoImage from '../assets/lws-logo-light.svg'
import Checkbox from '../components/inputs/Checkbox'
import Input from '../components/inputs/Input'

const Register = () => {
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
              Create your account
            </h2>
          </div>
          <form class='mt-8 space-y-6'>
            <div class='rounded-md shadow-sm -space-y-px'>
              <Input
                title='Full Name'
                name='name'
                rounded='t'
                type='text'
                required
              />
              <Input title='Email Address' name='email' type='email' required />
              <Input
                title='Password'
                name='password'
                type='password'
                required
              />
              <Input
                title='Confirm Password'
                rounded='b'
                name='confirmPassword'
                type='password'
                required
              />
            </div>
            <Checkbox
              title='Agreed with the terms and condition'
              name='rememberMe'
            />
            <div>
              <button type='submit' class='form-btn'>
                <span class='absolute left-0 inset-y-0 flex items-center pl-3'></span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
