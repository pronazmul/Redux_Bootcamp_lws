import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { Toaster } from 'react-hot-toast'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <>
    <Provider store={store}>
      <Toaster position='top-right' reverseOrder={false} />

      <App />
    </Provider>
  </>
)

reportWebVitals()
