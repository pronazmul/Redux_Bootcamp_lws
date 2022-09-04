import React from 'react'
import Layout from './components/Layout'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import Transactions from './components/Transactions/Transactions'

function App() {
  return (
    <>
      <Layout>
        <Balance />
        <TransactionForm />
        <Transactions />
      </Layout>
    </>
  )
}
export default App
