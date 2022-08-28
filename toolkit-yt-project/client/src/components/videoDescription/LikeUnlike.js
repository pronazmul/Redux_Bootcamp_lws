import React from 'react'
import likeIcon from '../../assets/like.svg'
import unlikeIcon from '../../assets/unlike.svg'

const LikeUnlike = () => {
  return (
    <div className='flex gap-10 w-48'>
      <div className='flex gap-1'>
        <div className='shrink-0'>
          <img className='w-5 block' src={likeIcon} alt='Like' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>100K</div>
      </div>
      <div className='flex gap-1'>
        <div className='shrink-0'>
          <img className='w-5 block' src={unlikeIcon} alt='Unlike' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>100K</div>
      </div>
    </div>
  )
}

export default LikeUnlike
