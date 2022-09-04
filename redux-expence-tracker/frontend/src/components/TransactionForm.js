import React from 'react'

const TransactionForm = () => {
  return (
    <div className='form'>
      <h3>Add new transaction</h3>

      <div className='form-group'>
        <label htmlFor='transaction_name'>Name</label>
        <input type='text' name='transaction_name' placeholder='My Salary' />
      </div>

      <div className='form-group radio'>
        <label htmlFor='transaction_type'>Type</label>
        <div className='radio_group'>
          <input
            type='radio'
            value='income'
            name='transaction_type'
            defaultChecked
          />
          <label htmlFor='transaction_type'>Income</label>
        </div>
        <div className='radio_group'>
          <input
            type='radio'
            value='expense'
            name='transaction_type'
            placeholder='Expense'
          />
          <label htmlFor='transaction_type'>Expense</label>
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='transaction_amount'>Amount</label>
        <input type='number' placeholder='300' name='transaction_amount' />
      </div>

      <button className='btn'>Add Transaction</button>

      <button className='btn cancel_edit'>Cancel Edit</button>
    </div>
  )
}

export default TransactionForm
