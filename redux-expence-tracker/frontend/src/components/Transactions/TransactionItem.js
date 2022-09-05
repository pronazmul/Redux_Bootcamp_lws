import React from 'react'
import EditIcon from '../../assets/images/edit.svg'
import DeleteIcon from '../../assets/images/delete.svg'
const TransactionItem = ({ transaction }) => {
  const { name, amount, type } = transaction
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className='right'>
        <p>৳ {amount}</p>
        <button className='link'>
          <img className='icon' alt='Edit Icon' src={EditIcon} />
        </button>
        <button className='link'>
          <img className='icon' alt='Delete Icon' src={DeleteIcon} />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
