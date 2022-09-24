import React from 'react'

export default function Teams() {
  return (
    <>
      <div class='flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200'>
        <div class='flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75'>
          <img src='./images/logo.png' class='h-10 w-10' />
          <div class='ml-10'>
            <a
              class='mx-2 text-sm font-semibold text-indigo-700'
              href='projects.html'
            >
              Projects
            </a>
            <a
              class='mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700'
              href='teams.html'
            >
              Team
            </a>
          </div>
          <buton class='flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer'>
            <img
              src='https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512'
              alt=''
            />
          </buton>
        </div>
        <div class='px-10 mt-6 flex justify-between'>
          <h1 class='text-2xl font-bold'>Teams</h1>
          <button class='flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100'>
            <svg
              class='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              ></path>
            </svg>
          </button>
        </div>
        <div class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto'>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <button class='absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex'>
              <svg
                class='w-4 h-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
              </svg>
            </button>
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full'>
              Design
            </span>
            <h4 class='mt-3 text-sm font-medium'>
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div class='flex items-center w-full mt-3 text-xs font-medium text-gray-400'>
              <div class='flex items-center'>
                <svg
                  class='w-4 h-4 text-gray-300 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='ml-1 leading-none'>Dec 12</span>
              </div>
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <button class='absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex'>
              <svg
                class='w-4 h-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
              </svg>
            </button>
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full'>
              Dev
            </span>
            <h4 class='mt-3 text-sm font-medium'>
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div class='flex items-center w-full mt-3 text-xs font-medium text-gray-400'>
              <div class='flex items-center'>
                <svg
                  class='w-4 h-4 text-gray-300 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='ml-1 leading-none'>Dec 12</span>
              </div>
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <button class='absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex'>
              <svg
                class='w-4 h-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
              </svg>
            </button>
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full'>
              Dev
            </span>
            <h4 class='mt-3 text-sm font-medium'>
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div class='flex items-center w-full mt-3 text-xs font-medium text-gray-400'>
              <div class='flex items-center'>
                <svg
                  class='w-4 h-4 text-gray-300 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='ml-1 leading-none'>Dec 12</span>
              </div>
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <button class='absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex'>
              <svg
                class='w-4 h-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
              </svg>
            </button>
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full'>
              Dev
            </span>
            <h4 class='mt-3 text-sm font-medium'>
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div class='flex items-center w-full mt-3 text-xs font-medium text-gray-400'>
              <div class='flex items-center'>
                <svg
                  class='w-4 h-4 text-gray-300 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='ml-1 leading-none'>Dec 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class='fixed bottom-0 right-0 flex items-center justify-center h-8 pl-1 pr-2 mb-6 mr-4 text-blue-100 bg-indigo-600 rounded-full shadow-lg hover:bg-blue-600'
        href='https://learnwithsumit.com'
        target='_top'
      >
        <div class='flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full'>
          <img src='./images/logo.png' alt='LWS Logo' />
        </div>
        <span class='ml-1 text-sm leading-none'>Learn with Sumit</span>
      </a>
    </>
  )
}
