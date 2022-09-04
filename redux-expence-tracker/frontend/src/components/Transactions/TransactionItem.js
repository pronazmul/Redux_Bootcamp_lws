import React from 'react'
import EditIcon from '../../assets/images/edit.svg'
import DeleteIcon from '../../assets/images/delete.svg'
const TransactionItem = () => {
  return (
    <li className='transaction income'>
      <p>Expance this month</p>
      <div className='right'>
        <p>৳ 50</p>
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
