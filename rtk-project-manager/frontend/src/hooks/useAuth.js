import React from 'react'
import { useSelector } from 'react-redux'

const useAuth = () => {
  const auth = useSelector((state) => state.auth)
  if (auth?.accessToken && auth?.user) {
    return true
  } else {
    return false
  }
}

export default useAuth
