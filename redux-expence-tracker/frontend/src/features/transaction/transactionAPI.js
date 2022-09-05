import axios from './../../utils/axios'

export const getTransactionsAPI = async () => {
  const response = await axios.get('/transactions')
  return response.data
}

export const addTransactionAPI = async (data) => {
  const response = await axios.post('/transactions', data)
  return response.data
}

export const updateTransactionAPI = async (id, data) => {
  const response = await axios.put(`/transactions${id}`, data)
  return response.data
}

export const deleteTransactionAPI = async (id) => {
  const response = await axios.delete(`/transactions${id}`)
  return response.data
}
