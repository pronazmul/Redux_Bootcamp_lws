import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/authRoutes/PrivateRoute'
import PublicRoute from './components/authRoutes/PublicRoute'
import AuthLoader from './components/ui/AuthLoader'
import useAuthCheck from './hooks/useAuthCheck'
import Conversation from './pages/Conversation'
import Inbox from './pages/Inbox'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const authChecked = useAuthCheck()

  return !authChecked ? (
    <AuthLoader />
  ) : (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path='/inbox'
          element={
            <PrivateRoute>
              <Conversation />
            </PrivateRoute>
          }
        />
        <Route
          path='/inbox/:id'
          element={
            <PrivateRoute>
              <Inbox />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
