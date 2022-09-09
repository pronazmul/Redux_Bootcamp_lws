import axios from './../../utils/axios'

export const getTransactionsAPI = async ({ type, search, page, entities }) => {
  let query = ''

  if (type) {
    query += `&type_like=${type}`
  }

  if (search) {
    query += `&q=${search}`
  }

  if (page && entities) {
    query += `&_limit=${entities}&_page=${page}`
  }

  const response = await axios.get(`/transactions?_sort=id&_order=desc${query}`)
  return { data: response.data, totalCount: response.headers['x-total-count'] }
}

export const getTotalAmountAPI = async () => {
  const response = await axios.get(`/transactions`)
  const amount = response.data.reduce(
    (acc, curr) =>
      curr.type === 'income' ? acc + curr.amount : acc - curr.amount,
    0
  )
  return amount
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
