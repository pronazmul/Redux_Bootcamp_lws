import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/lws-logo-light.svg'
import Input from '../components/inputs/Input'
import { useFormik } from 'formik'
import InputPassword from '../components/inputs/InputPassword'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values))
      resetForm()
    },
  })
  const { handleChange, handleSubmit, values } = formik

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
          <form class='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div>
              <Input
                title='Email Address'
                name='email'
                type='email'
                onChange={handleChange}
                value={values.email}
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
              <Link
                className='block font-black text-indigo-600 text-sm text-right mt-1'
                to='/register'
              >
                Create new Acount?
              </Link>
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
