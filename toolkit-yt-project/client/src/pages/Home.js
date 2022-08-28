import React from 'react'
import Navbar from './../components/navbar/Navbar'
import Tags from './../components/tag/Tags'
import VideoGrid from './../components/videoGrid/VideoGrid'
import Pagination from './../components/ui/Pagination'
import Footer from './../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </>
  )
}

export default Home
