import React from 'react'
import ProjectListHeader from './ProjectListHeader'

const ProjectList = () => {
  return (
    <div class='flex flex-grow px-10 mt-4 space-x-6 overflow-auto'>
      <div class='flex flex-col flex-shrink-0 w-72'>
        <div class='flex items-center flex-shrink-0 h-10 px-2'>
          <span class='block text-sm font-semibold'>Backlog</span>
          <span class='flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30'>
            6
          </span>
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

        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300  '>
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/44.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/men/46.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/48.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full'>
              Copywriting
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col flex-shrink-0 w-72'>
        <div class='flex items-center flex-shrink-0 h-10 px-2'>
          <span class='block text-sm font-semibold'>Ready</span>
          <span class='flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30'>
            3
          </span>
        </div>
        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300'>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/men/64.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col flex-shrink-0 w-72'>
        <div class='flex items-center flex-shrink-0 h-10 px-2'>
          <span class='block text-sm font-semibold'>Doing</span>
          <span class='flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30'>
            2
          </span>
        </div>
        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300'>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/men/64.jpg'
              />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col flex-shrink-0 w-72'>
        <div class='flex items-center flex-shrink-0 h-10 px-2'>
          <span class='block text-sm font-semibold'>Review</span>
          <span class='flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30'>
            3
          </span>
        </div>
        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300'>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/men/64.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full'>
              Copywriting
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/44.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/44.jpg'
              />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col flex-shrink-0 w-72'>
        <div class='flex items-center flex-shrink-0 h-10 px-2'>
          <span class='block text-sm font-semibold'>Blocked</span>
          <span class='flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30'>
            1
          </span>
        </div>
        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300'>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col flex-shrink-0 w-72'>
        <div class='flex items-center flex-shrink-0 h-10 px-2'>
          <span class='block text-sm font-semibold'>Done</span>
          <span class='flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30'>
            3
          </span>
        </div>
        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300'>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full'>
              Copywriting
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
            <span class='flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full'>
              Copywriting
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/44.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/men/46.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/men/46.jpg'
              />
            </div>
          </div>
          <div
            class='relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'
            draggable='true'
          >
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

              <img
                class='w-6 h-6 ml-auto rounded-full'
                src='https://randomuser.me/api/portraits/women/26.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
