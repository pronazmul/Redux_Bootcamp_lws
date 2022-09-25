import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './../../hooks/useAuth'

const PublicRoute = ({ children }) => {
  const auth = useAuth()
  return !auth ? children : <Navigate to='/team' />
}

export default PublicRoute
