import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Transaction from './pages/Transaction'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
      </Layout>
    </Router>
  )
}
export default App
