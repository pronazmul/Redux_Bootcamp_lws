import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions } from '../../features/transaction/transactionSlice'
import TransactionItem from './TransactionItem'

const Transactions = () => {
  let dispatch = useDispatch()
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  )

  React.useEffect(() => {
    dispatch(fetchTransactions(5))
  }, [])

  return (
    <>
      <p className='second_heading'>Your Transactions:</p>
      <div className='conatiner_of_list_of_transactions'>
        <ul>
          {isLoading ? (
            <p>Loading ...</p>
          ) : isError && error ? (
            <p>Something Went Wrong!</p>
          ) : !transactions.length ? (
            <p>No Transaction Found!</p>
          ) : (
            transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          )}
        </ul>
        {/* Show More Buttons */}
        <div className={{ backgroundColor: 'gray' }}>View More</div>
      </div>
    </>
  )
}

export default Transactions
