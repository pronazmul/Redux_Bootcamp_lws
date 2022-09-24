import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoImage from '../assets/lws-logo-light.svg'
import Input from '../components/inputs/Input'
import { useFormik } from 'formik'
import InputPassword from '../components/inputs/InputPassword'
import { useLoginMutation } from '../features/auth/authApi'
import { toast } from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()
  const [login, { data, isLoading, error }] = useLoginMutation()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      login(values)
      resetForm()
    },
  })
  React.useEffect(() => {
    if (data?.accessToken) {
      toast.success('Successfully Logged In.')
      navigate('/teams')
    }
    if (error?.data) {
      toast.error(error.data)
    }
  }, [data, error, navigate])

  const { handleChange, handleSubmit, values } = formik

  return (
    <div className='grid place-items-center h-screen bg-[#F9FAFB'>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
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
              <button disabled={isLoading} type='submit' className='form-btn'>
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
