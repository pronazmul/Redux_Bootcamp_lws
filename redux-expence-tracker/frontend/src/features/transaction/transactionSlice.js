import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getTransactionsAPI,
  addTransactionAPI,
  updateTransactionAPI,
  deleteTransactionAPI,
} from './transactionAPI'

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: '',
}

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchTransaction',
  async () => {
    const transactions = await getTransactionsAPI()
    return transactions
  }
)

export const addTransaction = createAsyncThunk(
  'transaction/fetchTransaction',
  async (data) => {
    const transaction = await addTransactionAPI(data)
    return transaction
  }
)

export const updateTransaction = createAsyncThunk(
  'transaction/fetchTransaction',
  async ({ id, data }) => {
    const transaction = updateTransactionAPI(id, data)
    return transaction
  }
)

export const deleteTransaction = createAsyncThunk(
  'transaction/fetchTransaction',
  async (id) => {
    const transaction = deleteTransactionAPI(id)
    return transaction
  }
)

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isError = true
        state.error = ''
        state.isLoading = true
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.transactions = action.payload
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
    builder
      .addCase(addTransaction.pending, (state) => {
        state.isError = true
        state.error = ''
        state.isLoading = true
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.transactions.push = action.payload
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
    builder
      .addCase(updateTransaction.pending, (state) => {
        state.isError = true
        state.error = ''
        state.isLoading = true
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.transactions[action.payload.id] = action.payload
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
    builder
      .addCase(deleteTransaction.pending, (state) => {
        state.isError = true
        state.error = ''
        state.isLoading = true
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        )
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default transactionSlice
