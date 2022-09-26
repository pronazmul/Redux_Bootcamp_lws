import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProjectHeader from '../components/projects/ProjectHeader'
import ProjectList from '../components/projects/ProjectList'
import ChatButton from '../components/ui/ChatButton'

const Project = () => {
  return (
    <>
      <div className='flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200'>
        <Navbar search />
        <ProjectHeader />
        <ProjectList />
      </div>
      <ChatButton />
    </>
  )
}

export default Project
