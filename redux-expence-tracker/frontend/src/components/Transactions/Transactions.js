import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import TransactionItem from './TransactionItem'

const Transactions = ({ home }) => {
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  )
  return (
    <>
      {home && <p className='second_heading'>Your Transactions:</p>}
      <div className='conatiner_of_list_of_transactions'>
        <ul>
          {isLoading ? (
            <p>Loading ...</p>
          ) : isError && error ? (
            <p>Something Went Wrong!</p>
          ) : !transactions.length ? (
            <p>You Didn't make any transaction yet!</p>
          ) : (
            transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          )}
        </ul>
        {home && transactions.length ? (
          <Link to='/transaction' className='see_more'>
            View All
          </Link>
        ) : null}
      </div>
    </>
  )
}

export default Transactions
