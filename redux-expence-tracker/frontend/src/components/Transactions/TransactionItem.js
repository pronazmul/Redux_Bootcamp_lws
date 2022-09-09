import React from 'react'
import EditIcon from '../../assets/images/edit.svg'
import DeleteIcon from '../../assets/images/delete.svg'
import { useDispatch } from 'react-redux'
import {
  transactionEdit,
  deleteTransaction,
} from '../../features/transaction/transactionSlice'
import { thousandSaperator } from '../../utils/logics'
import { useMatch, useNavigate } from 'react-router-dom'
const TransactionItem = ({ transaction }) => {
  const { id, name, amount, type } = transaction

  const match = useMatch('/')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  function editHandler() {
    dispatch(transactionEdit(transaction))
    if (!match) {
      navigate('/')
    }
  }

  function deleteHandler() {
    dispatch(deleteTransaction(id))
  }

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className='right'>
        <p>৳ {thousandSaperator(amount)}</p>
        <button className='link' onClick={editHandler}>
          <img className='icon' alt='Edit Icon' src={EditIcon} />
        </button>
        <button className='link' onClick={deleteHandler}>
          <img className='icon' alt='Delete Icon' src={DeleteIcon} />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
