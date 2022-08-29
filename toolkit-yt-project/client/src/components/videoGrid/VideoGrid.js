import React from 'react'
import VideoGridItem from './VideoGridItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from './../../features/videos/videosSlice'
import Loading from '../ui/Loading'
import Error from '../ui/Error'

const VideoGrid = () => {
  let dispatch = useDispatch()
  let { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  )

  React.useEffect(() => {
    dispatch(fetchVideos())
  }, [dispatch])

  return (
    <section className='pt-12'>
      <section className='pt-12'>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error error={error} />
        ) : videos.length ? (
          <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
            {videos.map((video) => (
              <VideoGridItem key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <Error error='No videos found' />
        )}
      </section>
    </section>
  )
}

export default VideoGrid
