import React from 'react'
import BarGraph from '../graph/BarGraph';

const ContentBody = ({ graphToggle}) => {
  console.log('ContentBody:', graphToggle)
  return (
    <div className={graphToggle  ? 'w-full text-white mt-20' : 'text-white w-full'}>{graphToggle ? <BarGraph /> : "Content Body"}</div>

  )
}

export default ContentBody