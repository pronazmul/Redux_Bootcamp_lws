import React from 'react'
import { useSelector } from 'react-redux'
import { useGetTeamsQuery } from '../../features/teams/teamsApi'
import Loader from '../ui/Loader'
import TeamItem from './TeamItem'
import Error from './../ui/Error'

const Teams = () => {
  const { user } = useSelector((state) => state.auth)
  const { data, isLoading, isError, error } = useGetTeamsQuery(user?.email)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto'>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error message={error?.data} />
      ) : (
        data.map((team) => <TeamItem key={team.id} team={team} />)
      )}
    </div>
  )
}

export default Teams
