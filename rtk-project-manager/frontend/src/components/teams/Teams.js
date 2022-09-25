import React from 'react'
import TeamItem from './TeamItem'

const Teams = () => {
  const data = [
    {
      name: 'design',
      color: 'purple',
      description: 'Hello there we are Design team',
      assigned: ['jhankar@gmail.com'],
      timestamp: 1664121488,
      id: 1,
    },
    {
      name: 'development',
      color: 'green',
      description: 'Hello there we are Development team',
      assigned: ['nazmul@gmail.com'],
      timestamp: 1664121513,
      id: 2,
    },
    {
      name: 'app',
      color: 'blue',
      description: 'Hello there we are App Dev team',
      assigned: ['nazmul@gmail.com'],
      timestamp: 1664121537,
      id: 3,
    },
    {
      name: 'ux/ui',
      color: 'pink',
      description: 'Hello there we are App UX/UI team',
      assigned: ['nazmul@gmail.com'],
      timestamp: 1664121557,
      id: 4,
    },
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto'>
      {data.map((team) => (
        <TeamItem key={team.id} team={team} />
      ))}
    </div>
  )
}

export default Teams
