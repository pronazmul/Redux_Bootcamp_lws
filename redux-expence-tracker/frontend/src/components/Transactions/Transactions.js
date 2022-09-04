import React from 'react'
import TransactionItem from './TransactionItem'

const Transactions = () => {
  return (
    <>
      <p className='second_heading'>Your Transactions:</p>

      <div className='conatiner_of_list_of_transactions'>
        <ul>
          <TransactionItem />
          <TransactionItem />
        </ul>
      </div>
    </>
  )
}

export default Transactions
