import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoImage from '../assets/logo.png'
import Input from '../components/inputs/Input'
import { Formik, useFormik } from 'formik'
import InputPassword from '../components/inputs/InputPassword'
import { useLoginMutation } from '../features/auth/authApi'
import { toast } from 'react-hot-toast'
import { usersCredentials } from '../utils/config'

const Login = () => {
  const navigate = useNavigate()
  const [login, { data, isLoading, error }] = useLoginMutation()

  function loginHandler(values, { resetForm }) {
    login(values)
    resetForm()
  }

  function defaultLogin(user) {
    login({ email: user?.email, password: user?.password })
  }

  React.useEffect(() => {
    if (data?.accessToken) {
      toast.success('Successfully Logged In.')
      navigate('/teams')
    }
    if (error?.data) {
      toast.error(error.data)
    }
  }, [data, error, navigate])

  return (
    <div className='grid place-items-center h-screen bg-[#F9FAFB'>
      <div className='min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src={logoImage}
              alt='Learn with sumit'
            />
            <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
              Sign in to your account
            </h2>
          </div>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={loginHandler}
          >
            {({ handleChange, values, handleSubmit }) => (
              <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div>
                  <Input
                    title='Email Address'
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    className='rounded-t-md'
                    required
                  />
                  <InputPassword
                    title='Password'
                    name='password'
                    onChange={handleChange}
                    value={values.password}
                    className='rounded-b-md'
                    required
                  />
                </div>
                <div>
                  <button
                    disabled={isLoading}
                    type='submit'
                    className='form-btn'
                  >
                    Sign in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className='space-y-2'>
          <h2 className='mt-6 text-center text-md font-bold text-gray-500 uppercase'>
            Sign In With
          </h2>
          {/* Login With Default Users */}
          <div className='flex items-center space-x-2'>
            {usersCredentials.map((user) => (
              <div
                key={user?.id}
                className='space-y-1 p-2 shadow-lg rounded-lg cursor-pointer '
                onClick={() => defaultLogin(user)}
              >
                <img
                  className='mx-auto h-12 w-auto rounded-full'
                  src={user?.avatar}
                  alt='Learn with sumit'
                />
                <h2 className='text-xs text-center text-gray-400 '>
                  {user?.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
