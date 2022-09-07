import React from 'react'
import EditIcon from '../../assets/images/edit.svg'
import DeleteIcon from '../../assets/images/delete.svg'
import { useDispatch } from 'react-redux'
import { transactionEdit } from '../../features/transaction/transactionSlice'
const TransactionItem = ({ transaction }) => {
  const { name, amount, type } = transaction

  const dispatch = useDispatch()
  function editHandler() {
    dispatch(transactionEdit(transaction))
  }
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className='right'>
        <p>৳ {amount}</p>
        <button className='link' onClick={editHandler}>
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
