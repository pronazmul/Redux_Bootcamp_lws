import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

/**
 * @desc Custom Modal
 * @param {boolean} Modal Show Hide State
 * @param {Function} Modal Toggler Function
 * @param {children} Children Component
 * @returns {void}
 */

const Modal = ({ open, modalHandler, children }) => {
  return (
    <>
      <Transition appear show={open}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={modalHandler}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-lg ' />
            </Transition.Child>
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-lg my-8 overflow-hidden align-middle transition-all transform'>
                {React.cloneElement(children, { modalHandler })}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default Modal
