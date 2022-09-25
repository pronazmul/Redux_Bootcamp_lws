import React from 'react'
import Navbar from '../components/navbar/Navbar'
import TeamHeader from '../components/teams/TeamHeader'
import Teams from '../components/teams/Teams'
import ChatButton from '../components/ui/ChatButton'

export default function Team() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200'>
        <TeamHeader />
        <Teams />
      </div>
      <ChatButton />
    </>
  )
}
