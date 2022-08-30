import React from 'react'
import RelatedVideosList from '../components/relatedVideos/RelatedVideosList'
import Description from '../components/videoDescription/Description'
import Player from '../components/videoDescription/Player'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideo } from './../features/video/videoSlice'
import { useParams } from 'react-router-dom'
import Loading from './../components/ui/Loading'
import Error from './../components/ui/Error'

const Video = () => {
  const { videoId } = useParams()
  const dispatch = useDispatch()
  const { isLoading, isError, error, video } = useSelector(
    (state) => state.video
  )
  React.useEffect(() => {
    dispatch(fetchVideo(videoId))
  }, [dispatch, videoId])

  const { id, title, link, tags } = video
  return (
    <section className='pt-6 pb-20'>
      <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
        <div className='grid grid-cols-3 gap-2 lg:gap-8'>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <Error error={error} />
          ) : (
            <div className='col-span-full w-full space-y-8 lg:col-span-2'>
              <Player title={title} link={link} />
              <Description video={video} />
            </div>
          )}
          <RelatedVideosList currentVideoId={id} tags={tags} />
        </div>
      </div>
    </section>
  )
}

export default Video
