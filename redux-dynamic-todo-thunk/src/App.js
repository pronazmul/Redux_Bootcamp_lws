import React from 'react'
import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import store from './redux/store'
import TodoList from './components/TodoList'
import CompleteTodoList from './components/CompleteTodoList'

function App() {
  return (
    <Provider store={store}>
      <div className='grid place-items-center bg-blue-100 h-screen px-6 font-sans'>
        <Navbar />
        <div className='space-y-2'>
          <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
            <Header />
            <hr className='mt-4' />
            <TodoList />
            <hr className='mt-4' />
            <Footer />
          </div>
          <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
            <CompleteTodoList />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
