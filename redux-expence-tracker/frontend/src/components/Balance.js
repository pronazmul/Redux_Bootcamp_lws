import React from 'react'
import { useSelector } from 'react-redux'
import { thousandSaperator } from '../utils/logics'

const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction)
  let balance = transactions.reduce(
    (acc, curr) =>
      curr.type === 'income' ? acc + curr.amount : acc - curr.amount,
    0
  )

  return (
    <div className='top_card'>
      <p>Your Current Balance</p>
      <h3>
        <span>৳ </span>
        <span>{thousandSaperator(balance)}</span>
      </h3>
    </div>
  )
}

export default Balance
