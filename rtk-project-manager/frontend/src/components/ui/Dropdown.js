import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Dropdown = ({ options, setOption, children }) => {
  return (
    <div className=' text-right top-16'>
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
          <Menu.Items className='absolute z-10 right-0 w-24  origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='p-1 '>
              {options.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <p
                      onClick={() => {
                        setOption(item.name)
                      }}
                      className={`${
                        active ? 'bg-indigo-500  text-white' : 'text-gray-500'
                      } flex rounded-md items-center w-full p-1.5 text-xs space-x-4 cursor-pointer`}
                    >
                      <span>
                        <i className={item.icon} />
                      </span>
                      <span className='capitalize '>{item.name}</span>
                    </p>
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

export default Dropdown
