import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <>
    <Provider store={store}>
      <Toaster position='top-right' reverseOrder={false} />
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  </>
)

reportWebVitals()
