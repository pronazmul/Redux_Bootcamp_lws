import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import {
  getTransactionsAPI,
  addTransactionAPI,
  updateTransactionAPI,
  deleteTransactionAPI,
  getTotalAmountAPI,
} from './transactionAPI'

const initialState = {
  transactions: [],
  totalAmount: 0,
  isLoading: false,
  isError: false,
  error: '',
  editDetails: {},
  editMode: false,
}

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchTransaction',
  async (query) => {
    const transactions = await getTransactionsAPI(query)
    return transactions
  }
)

export const fetchTotalAmont = createAsyncThunk(
  'transaction/fetchTotalAmont',
  async () => {
    const amount = await getTotalAmountAPI()
    return amount
  }
)

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (data) => {
    const transaction = await addTransactionAPI(data)
    return transaction
  }
)

export const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async ({ id, data }) => {
    const transaction = await updateTransactionAPI(id, data)
    return transaction
  }
)

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id) => {
    const transaction = await deleteTransactionAPI(id)
    return transaction
  }
)

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    transactionEdit(state, action) {
      state.editDetails = action.payload
      state.editMode = true
    },
    cancelEdit(state) {
      state.editMode = false
      state.editDetails = {}
    },
  },
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
        state.transactions = action.payload.data
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
      .addCase(fetchTotalAmont.fulfilled, (state, action) => {
        state.totalAmount = action.payload
      })
      .addCase(addTransaction.pending, (state) => {
        state.isError = true
        state.error = ''
        state.isLoading = true
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.transactions.unshift(action.payload)
        state.transactions = state.transactions.splice(0, 5)
        state.totalAmount =
          action.payload.type === 'income'
            ? state.totalAmount + action.payload.amount
            : state.totalAmount - action.payload.amount
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
      .addCase(updateTransaction.pending, (state) => {
        state.isError = true
        state.error = ''
        state.isLoading = true
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        const updateIndex = state.transactions.findIndex(
          (tx) => tx.id === action.payload.id
        )
        state.transactions[updateIndex] = action.payload


      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isError = true
        state.error = ''
        state.isLoading = true
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        let deletetx = state.transactions.find((t) => t.id === action.meta.arg)
        state.totalAmount =
          deletetx.type === 'income'
            ? state.totalAmount - deletetx.amount
            : state.totalAmount + deletetx.amount
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.meta.arg
        )
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      })
  },
})

export const { transactionEdit, cancelEdit } = transactionSlice.actions
export default transactionSlice.reducer
