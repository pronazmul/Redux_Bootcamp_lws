import React from 'react'
import Transactions from '../components/Transactions/Transactions'
import Search from '../components/ui/Search'
import { fetchTransactions } from '../features/transaction/transactionSlice'
import { useDispatch, useSelector } from 'react-redux'
import RadioGroup from '../components/ui/RadioGroup'
import Pagination from '../components/ui/Pagination'

const Transaction = () => {
  const dispatch = useDispatch()
  const { search, type, page, entities } = useSelector((state) => state.filter)

  React.useEffect(() => {
    dispatch(fetchTransactions({ type, search, page, entities }))
  }, [search, type, page])

  return (
    <div>
      <Search />
      <RadioGroup />
      <Transactions />
      <Pagination />
    </div>
  )
}

export default Transaction
