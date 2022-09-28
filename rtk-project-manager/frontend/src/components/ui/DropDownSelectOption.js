import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DropDownSelectOption({
  options,
  setOption,
  fieldName,
  title,
  value,
  children,
}) {
  return (
    <div className=' text-left top-16 z-30'>
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
          <Menu.Items className='absolute z-30 left-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='p-1 '>
              {options.map((item, idx) => (
                <Menu.Item>
                  {({ active }) => (
                    <p
                      key={idx}
                      onClick={() => {
                        setOption(fieldName, item[value])
                      }}
                      className={`${
                        active ? 'bg-indigo-500  text-white' : 'text-gray-500'
                      }  rounded-md w-full p-2 text-sm  cursor-pointer`}
                    >
                      <span>{item[title]}</span>
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
