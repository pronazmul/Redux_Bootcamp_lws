import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import RelatedVideosList from '../components/relatedVideos/RelatedVideosList'
import Description from '../components/videoDescription/Description'
import Player from '../components/videoDescription/Player'

const Video = () => {
  return (
    <>
      <Navbar />
      <section className='pt-6 pb-20'>
        <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
          <div className='grid grid-cols-3 gap-2 lg:gap-8'>
            <div className='col-span-full w-full space-y-8 lg:col-span-2'>
              <Player />

              <Description />
            </div>
            <RelatedVideosList />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Video
