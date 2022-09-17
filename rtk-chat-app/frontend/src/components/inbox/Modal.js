import TextArea from '../inputs/TextArea'
import Input from './../inputs/Input'
import { useState } from 'react'
import debounce from '../../utils/debounce'
import { checkValidEmail } from './../../utils/reguarExpressions'

export default function Modal({ open, control }) {
  const [to, setTo] = useState('')
  const [message, setMessage] = useState('')

  function doSearch(value) {
    if (checkValidEmail(value)) {
      setTo(value)
      console.log(value)
    }
  }
  const handleSearch = debounce(doSearch, 500)

  return (
    open && (
      <>
        <div
          onClick={control}
          className='fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer'
        ></div>
        <div className='rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Send message
          </h2>
          <form className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm -space-y-px'>
              <Input
                title='Send To'
                name='to'
                type='email'
                onChange={(e) => handleSearch(e.target.value)}
                className='rounded-t-md'
                required
              />
              <TextArea
                title='Message'
                name='message'
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='rounded-b-md'
                required
              />
            </div>
            <div>
              <button type='submit' className='form-btn'>
                Send Message
              </button>
            </div>

            {/* <Error message="There was an error" /> */}
          </form>
        </div>
      </>
    )
  )
}
