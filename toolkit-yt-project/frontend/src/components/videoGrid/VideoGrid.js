import React from 'react'
import VideoGridItem from './VideoGridItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from './../../features/videos/videosSlice'
import Loading from '../ui/Loading'
import Error from '../ui/Error'

const VideoGrid = () => {
  const dispatch = useDispatch()
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  )
  const { tags, search, author } = useSelector((state) => state.filter)
  const { page, entities } = useSelector((state) => state.pagination)

  React.useEffect(() => {
    dispatch(fetchVideos({ tags, search, author, page, entities }))
  }, [dispatch, tags, author, search, page, entities])

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
