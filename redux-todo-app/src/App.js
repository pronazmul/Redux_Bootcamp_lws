import { Provider } from 'react-redux'
import Header from './components/Header'
import Navbar from './components/Navbar'
import store from './components/redux/store'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <div className='grid place-items-center bg-blue-100 h-screen px-6 font-sans'>
        <Navbar />
        <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
          <Header />
          <hr className='mt-4' />
          <ToDoList />
          <hr className='mt-4' />
          <Footer />
        </div>
      </div>
    </Provider>
  )
}

export default App
