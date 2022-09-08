import axios from './../../utils/axios'

export const getTransactionsAPI = async (limit) => {
  const response = await axios.get(
    `/transactions?_sort=id&_order=desc&_limit=${limit}`
  )
  return { data: response.data, totalCount: response.headers['x-total-count'] }
}

export const addTransactionAPI = async (data) => {
  const response = await axios.post('/transactions', data)
  return response.data
}

export const updateTransactionAPI = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data)
  return response.data
}

export const deleteTransactionAPI = async (id) => {
  const response = await axios.delete(`/transactions/${id}`)
  return response.data
}
