import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function DropDownLink({ data, children, className }) {
  return (
    <div className={`text-right top-16 ${className}`}>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button>{children}</Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute z-10 right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='p-1 '>
              {data &&
                data.map((item) => (
                  <Menu.Item key={item}>
                    {({ active }) => (
                      <Link
                        to={item.sublink}
                        className={`${
                          active ? 'bg-indigo-500  text-white' : 'text-gray-500'
                        } flex rounded-md items-center w-full p-2 text-sm space-x-4`}
                      >
                        <span>
                          <i className={item.icon} />
                        </span>
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
