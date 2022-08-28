import React from 'react'
import RelatedVideoItem from './RelatedVideoItem'

const RelatedVideosList = () => {
  return (
    <div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
      <RelatedVideoItem />
    </div>
  )
}

export default RelatedVideosList
