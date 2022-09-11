import { useGetRelatedVideosQuery } from '../../../features/api/apiSlice'
import Error from '../../ui/Error'
import RelatedVideoLoader from '../../ui/loaders/RelatedVideoLoader'
import RelatedVideo from './RelatedVideo'

export default function RelatedVideos({ title, id }) {
  const {
    data: videos,
    isLoading,
    isError,
  } = useGetRelatedVideosQuery({ videoId: id, title })

  return (
    <div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
      {isLoading ? (
        <RelatedVideoLoader times={4} />
      ) : isError ? (
        <Error title='No Related Video Matched!' />
      ) : (
        videos.map((video) => <RelatedVideo key={video.id} video={video} />)
      )}
    </div>
  )
}
