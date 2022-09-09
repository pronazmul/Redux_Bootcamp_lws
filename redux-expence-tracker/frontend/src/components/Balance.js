import React from 'react'
import { useSelector } from 'react-redux'
import { thousandSaperator } from '../utils/logics'

const Balance = () => {
  const { totalAmount } = useSelector((state) => state.transaction)

  return (
    <div className='top_card'>
      <p>Your Current Balance</p>
      <h3>
        <span>৳ </span>
        <span>{thousandSaperator(totalAmount)}</span>
      </h3>
    </div>
  )
}

export default Balance
