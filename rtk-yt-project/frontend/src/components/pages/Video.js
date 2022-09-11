import { useParams } from 'react-router-dom'
import { useGetVideoQuery } from '../../features/api/apiSlice'
import Error from '../ui/Error'
import PlayerLoader from '../ui/loaders/PlayerLoader'
import RelatedVideoLoader from '../ui/loaders/RelatedVideoLoader'
import Description from '../video/Description'
import Player from '../video/Player'
import RelatedVideos from '../video/related/RelatedVideos'
import DescriptionLoader from './../ui/loaders/DescriptionLoader'

export default function Video() {
  const { videoId } = useParams()
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId)

  return (
    <section className='pt-6 pb-20 min-h-[calc(100vh_-_157px)]'>
      <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
        <div className='grid grid-cols-3 gap-2 lg:gap-8'>
          {isLoading ? (
            <>
              <div className='col-span-full w-full space-y-8 lg:col-span-2'>
                <PlayerLoader />
                <DescriptionLoader />
              </div>
              <RelatedVideoLoader times={1} />
            </>
          ) : isError || !video?.id ? (
            <>
              <div className='col-span-full w-full space-y-8 lg:col-span-2'>
                <Error title='Someting went Wrong' />
              </div>
              <Error title='Someting went Wrong' />
            </>
          ) : (
            <>
              <div className='col-span-full w-full space-y-8 lg:col-span-2'>
                <Player title={video.title} link={video.link} />
                <Description video={video} />
              </div>
              <RelatedVideos title={video.title} id={video.id} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
