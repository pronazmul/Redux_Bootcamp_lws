import React from 'react'
import Layout from './components/Layout'
import AddTodo from './components/todos/AddTodo'
import Todos from './components/todos/Todos'
import FilterTodo from './components/todos/FilterTodo'

function App() {
  return (
    <Layout>
      <AddTodo />
      <hr className='mt-4' />
      <Todos />
      <hr className='mt-4' />
      <FilterTodo />
    </Layout>
  )
}

export default App
