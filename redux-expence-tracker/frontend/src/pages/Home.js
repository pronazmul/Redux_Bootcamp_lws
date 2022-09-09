import React from 'react'
import { useDispatch } from 'react-redux'
import Balance from '../components/Balance'
import TransactionForm from '../components/TransactionForm'
import Transactions from '../components/Transactions/Transactions'
import {
  fetchTotalAmont,
  fetchTransactions,
} from '../features/transaction/transactionSlice'

const Home = () => {
  let dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchTotalAmont())
    dispatch(fetchTransactions({ type: '', search: '', page: 1, entities: 5 }))
  }, [])

  return (
    <>
      <Balance />
      <TransactionForm />
      <Transactions home />
    </>
  )
}

export default Home
