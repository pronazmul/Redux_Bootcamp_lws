import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTransaction,
  cancelEdit,
  updateTransaction,
} from './../features/transaction/transactionSlice'

const TransactionForm = () => {
  const dispatch = useDispatch()
  const { isLoading, editMode, editDetails } = useSelector(
    (state) => state.transaction
  )
  let { id, name, type, amount } = editDetails
  const fromik = useFormik({
    initialValues: {
      name: '',
      type: '',
      amount: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (editMode) {
        dispatch(updateTransaction({ id, data: values }))
        dispatch(cancelEdit())
      } else {
        dispatch(addTransaction(values))
      }
      resetForm()
    },
  })
  const {
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    resetForm,
  } = fromik

  React.useEffect(() => {
    if (id) {
      setFieldValue('name', name)
      setFieldValue('type', type)
      setFieldValue('amount', amount)
    }
  }, [id])

  function editModeCloser() {
    dispatch(cancelEdit())
    resetForm()
  }
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
        <button disabled={isLoading} type='submit' className='btn'>
          {editMode ? 'Update Transation' : ' Add Transaction'}
        </button>
      </form>
      {editMode && (
        <button className='btn cancel_edit' onClick={editModeCloser}>
          Cancel Edit
        </button>
      )}
    </div>
  )
}

export default TransactionForm
