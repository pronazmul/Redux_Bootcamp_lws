import { Provider } from 'react-redux'
import store from './components/redux/store'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogList from './components/BlogList'
import SearchBar from './components/SearchBar'
import Bannar from './components/Bannar'

function App() {
  return (
    <Provider store={store}>
      <div className=''>
        <Navbar />
        <SearchBar />
        <section className='relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='bg-white h-1/3 sm:h-2/3'></div>
          </div>
          <div className='relative max-w-7xl mx-auto'>
            <Bannar />
            <BlogList />
          </div>
        </section>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
