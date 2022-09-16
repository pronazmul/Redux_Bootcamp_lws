import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImage from '../assets/lws-logo-light.svg'
import Checkbox from '../components/inputs/Checkbox'
import Input from '../components/inputs/Input'
import { useFormik } from 'formik'
import InputPassword from '../components/inputs/InputPassword'
import { useRegisterMutation } from '../features/auth/authApi'
import { RegistrationSchema } from '../utils/YupSchemas'
import toast from 'react-hot-toast'

const Register = () => {
  const navigate = useNavigate()
  const [register, { data, isLoading, error }] = useRegisterMutation()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values, { resetForm }) => {
      const { name, email, password, ...rest } = values
      register({ name, email, password })
      resetForm()
    },
  })
  const { handleChange, handleSubmit, values, errors } = formik
  console.table(errors)

  React.useEffect(() => {
    if (data?.accessToken) {
      toast.success('Account Created Successfully')
      navigate('/inbox')
    }
    if (error?.data) {
      toast.error(error.data)
    }
  }, [data, error, navigate])

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
          <form class='mt-8 space-y-4' onSubmit={handleSubmit}>
            <div class='rounded-md shadow-sm -space-y-px'>
              <Input
                title='Full Name'
                name='name'
                type='text'
                onChange={handleChange}
                value={values.name}
                className='rounded-t-md'
                required
              />
              <Input
                title='Email Address'
                name='email'
                type='email'
                onChange={handleChange}
                value={values.email}
                required
              />
              <InputPassword
                title='Password'
                name='password'
                onChange={handleChange}
                value={values.password}
                required
              />
              <InputPassword
                title='Confirm Password'
                name='confirmPassword'
                onChange={handleChange}
                value={values.confirmPassword}
                className='rounded-b-md'
                required
              />
            </div>
            <Checkbox
              title='Agreed with the terms and condition'
              name='acceptTerms'
              onChange={handleChange}
              checked={values.acceptTerms}
            />
            <Link
              className='block font-black text-indigo-600 text-sm text-right'
              to='/'
            >
              Already has an account?
            </Link>
            <div>
              <button disabled={isLoading} type='submit' class='form-btn'>
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
