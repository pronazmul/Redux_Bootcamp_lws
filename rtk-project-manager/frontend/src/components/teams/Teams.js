import React from 'react'
import { demoTeams } from '../../utils/data'
import TeamItem from './TeamItem'

const Teams = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto'>
      {demoTeams.map((team) => (
        <TeamItem key={team.id} team={team} />
      ))}
    </div>
  )
}

export default Teams
