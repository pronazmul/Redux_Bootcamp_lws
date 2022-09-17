import React from 'react'
import { useDispatch } from 'react-redux'
import { userLoggedIn } from '../features/auth/authSlice'

const useAuthCheck = () => {
  const dispatch = useDispatch()
  const [authCheck, setAuthCheck] = React.useState(false)

  React.useEffect(() => {
    let localAuth = localStorage.getItem('auth')
    if (localAuth) {
      let { accessToken, user } = JSON.parse(localAuth)
      if (accessToken && user) {
        dispatch(
          userLoggedIn({
            accessToken,
            user,
          })
        )
      }
    }
    setAuthCheck(true)
  }, [dispatch])
  return authCheck
}

export default useAuthCheck
