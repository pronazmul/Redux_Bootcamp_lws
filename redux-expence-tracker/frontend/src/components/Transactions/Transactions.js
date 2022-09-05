import React from 'react'
import { useSelector } from 'react-redux'
import TransactionItem from './TransactionItem'

const Transactions = () => {
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  )

  let content
  if (isLoading) {
    content = <p>Loading ...</p>
  }

  if (isError && error) {
    content = <p>Something Went Wrong!</p>
  }
  if (!isError && !transactions.length) {
    content = <p>No Transaction Found!</p>
  }

  if (!isError && transactions.length) {
    content = transactions.map((transaction) => (
      <TransactionItem key={transaction.id} transaction={transaction} />
    ))
  }

  return (
    <>
      <p className='second_heading'>Your Transactions:</p>
      <div className='conatiner_of_list_of_transactions'>
        <ul>{content}</ul>
      </div>
    </>
  )
}

export default Transactions
