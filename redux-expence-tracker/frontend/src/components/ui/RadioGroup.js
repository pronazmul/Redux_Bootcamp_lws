import React from 'react'
import { useDispatch } from 'react-redux'
import { typeSelected } from '../../features/filter/filterSlice'

const RadioGroup = () => {
  const dispatch = useDispatch()
  let [type, setType] = React.useState('all')

  function handleChange(e) {
    setType(e.target.value)
  }

  React.useEffect(() => {
    if (type === 'all') {
      dispatch(typeSelected(''))
    } else {
      dispatch(typeSelected(type))
    }
  }, [type])

  return (
    <div className='radio-group radio'>
      <div className='radio_group'>
        <input
          id='all'
          type='radio'
          value='all'
          name='type'
          checked={type === 'all'}
          onChange={handleChange}
          required
        />
        <label style={{ cursor: 'pointer' }} htmlFor='all'>
          All
        </label>
      </div>
      <div className='radio_group'>
        <input
          id='income'
          type='radio'
          value='income'
          name='type'
          checked={type === 'income'}
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
          checked={type === 'expense'}
          onChange={handleChange}
        />
        <label style={{ cursor: 'pointer' }} htmlFor='expense'>
          Expense
        </label>
      </div>
    </div>
  )
}

export default RadioGroup
