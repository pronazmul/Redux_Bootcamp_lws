import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTransaction } from './../features/transaction/transactionSlice'

const TransactionForm = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, error } = useSelector(
    (state) => state.transaction
  )
  const fromik = useFormik({
    initialValues: {
      name: '',
      type: '',
      amount: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addTransaction(values))
      resetForm()
    },
  })

  const { handleChange, handleSubmit, values } = fromik

  return (
    <div className='form'>
      <h3>Add new transaction</h3>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='transaction_name'>Name</label>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            placeholder='Transaction Title'
            required
          />
        </div>

        <div className='form-group radio'>
          <label>Type</label>
          <div className='radio_group'>
            <input
              id='income'
              type='radio'
              value='income'
              name='type'
              checked={values.type === 'income'}
              onChange={handleChange}
              required
            />
            <label style={{ cursor: 'pointer' }} htmlFor='income'>
              Income
            </label>
          </div>
          <div className='radio_group'>
            <input
              id='expense'
              type='radio'
              value='expense'
              name='type'
              checked={values.type === 'expense'}
              onChange={handleChange}
            />
            <label style={{ cursor: 'pointer' }} htmlFor='expense'>
              Expense
            </label>
          </div>
        </div>

        <div className='form-group'>
          <label>Amount</label>
          <input
            type='number'
            placeholder='Enter Amount'
            name='amount'
            value={values.amount}
            onChange={handleChange}
            required
          />
        </div>

        <button type='submit' className='btn'>
          Add Transaction
        </button>
        <button className='btn cancel_edit'>Cancel Edit</button>
      </form>
    </div>
  )
}

export default TransactionForm
