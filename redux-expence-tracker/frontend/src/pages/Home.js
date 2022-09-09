import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Balance from '../components/Balance'
import TransactionForm from '../components/TransactionForm'
import Transactions from '../components/Transactions/Transactions'
import {
  fetchTotalAmont,
  fetchTransactions,
} from '../features/transaction/transactionSlice'

const Home = () => {
  const { transactions } = useSelector((state) => state.transaction)
  let dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchTotalAmont())
    if (transactions.length < 5) {
      dispatch(
        fetchTransactions({ type: '', search: '', page: 1, entities: 5 })
      )
    }
  }, [transactions])

  return (
    <>
      <Balance />
      <TransactionForm />
      <Transactions home />
    </>
  )
}

export default Home
