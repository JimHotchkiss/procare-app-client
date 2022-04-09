import React from 'react'
import BarGraph from '../graph/BarGraph';

const ContentBody = ({ graphToggle}) => {
  return (
    <div className='w-full'>{graphToggle ? <BarGraph /> : "Content Body"}</div>

  )
}

export default ContentBody