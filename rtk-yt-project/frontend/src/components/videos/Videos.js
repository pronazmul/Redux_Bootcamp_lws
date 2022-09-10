import { useGetVideosQuery } from '../../features/api/apiSlice'
import Video from './Video'
import VideoLoader from './../ui/loaders/VideoLoader'
import Error from './../ui/Error'

export default function Videos() {
  const { data: videos, isLoading, isError } = useGetVideosQuery()

  return isLoading ? (
    [...Array(9)].map((_v, i) => <VideoLoader key={i} />)
  ) : isError ? (
    <Error />
  ) : videos.length ? (
    videos.map((v) => <Video key={v.id} video={v} />)
  ) : (
    <Error title='No videos Found' />
  )
}
