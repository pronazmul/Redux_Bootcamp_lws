import React from 'react'
import { useDispatch } from 'react-redux'
import likeIcon from '../../assets/like.svg'
import unlikeIcon from '../../assets/unlike.svg'
import { likeVideo, unlikeVideo } from '../../features/likeUnlike/likeUnlikeAPI'

const LikeUnlike = ({ id, likes, unlikes }) => {
  let dispatch = useDispatch()

  function handleLike() {
    dispatch(likeVideo({ id, likeCount: likes + 1 }))
  }
  function handleUnlike() {
    dispatch(unlikeVideo({ id, unlikeCount: unlikes + 1 }))
  }
  return (
    <div className='flex gap-10 w-48'>
      <button onClick={handleLike} className='flex gap-1'>
        <div className='shrink-0'>
          <img className='w-5 block' src={likeIcon} alt='Like' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {likes}
        </div>
      </button>
      <button onClick={handleUnlike} className='flex gap-1'>
        <div className='shrink-0'>
          <img className='w-5 block' src={unlikeIcon} alt='Unlike' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {unlikes}
        </div>
      </button>
    </div>
  )
}

export default LikeUnlike
