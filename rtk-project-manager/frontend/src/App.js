import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/authRoutes/PrivateRoute'
import PublicRoute from './components/authRoutes/PublicRoute'
import Loader from './components/ui/Loader'
import NotFound from './components/ui/NotFound'
import useAuthCheck from './hooks/useAuthCheck'
import Login from './pages/Login'
import Project from './pages/Project'
import Team from './pages/Team'

function App() {
  const authChecked = useAuthCheck()

  return !authChecked ? (
    <Loader content='Authentication Checking' vh='100vh' />
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
          path='/team'
          element={
            <PrivateRoute>
              <Team />
            </PrivateRoute>
          }
        />
        <Route
          path='/project'
          element={
            <PrivateRoute>
              <Project />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={
            <PublicRoute>
              <NotFound />
            </PublicRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
