import axios from './../../utils/axios'

export const getTransactionsAPI = async () => {
  const response = await axios.get('/transaction')
  return response.data
}

export const addTransactionAPI = async (data) => {
  const response = await axios.post('/transaction', data)
  return response.data
}

export const updateTransactionAPI = async (id, data) => {
  const response = await axios.put(`/transaction${id}`, data)
  return response.data
}

export const deleteTransactionAPI = async (id) => {
  const response = await axios.delete(`/transaction${id}`)
  return response.data
}
