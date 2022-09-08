import React from 'react'
import Balance from '../components/Balance'
import TransactionForm from '../components/TransactionForm'
import Transactions from '../components/Transactions/Transactions'

const Home = () => {
  return (
    <>
      <Balance />
      <TransactionForm />
      <Transactions />
    </>
  )
}

export default Home
