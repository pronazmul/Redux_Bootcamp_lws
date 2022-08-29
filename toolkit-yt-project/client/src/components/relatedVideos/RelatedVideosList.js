import React from 'react'
import RelatedVideoItem from './RelatedVideoItem'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './../ui/Loading'
import Error from '../ui/Error'
import { fetchRelatedVideos } from './../../features/relatedVideos/relatedVideosSlice'

const RelatedVideosList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch()
  const { isLoading, isError, videos, error } = useSelector(
    (state) => state.relatedVideos
  )

  React.useEffect(() => {
    dispatch(fetchRelatedVideos({ id: currentVideoId, tags }))
  }, [dispatch, currentVideoId, tags])

  return (
    <div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error error={error} />
      ) : videos.length ? (
        videos.map((video) => <RelatedVideoItem key={video.id} video={video} />)
      ) : (
        <Error error='No videos found' />
      )}
    </div>
  )
}

export default RelatedVideosList
