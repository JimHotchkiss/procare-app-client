import React from 'react'
import BarGraph from '../graph/BarGraph';
import Instruction from '../instruction/Instruction';

const ContentBody = ({ graphToggle, instruction }) => {
  // console.log('ContentBody:', instructions)
  return (
    <div className={graphToggle  ? 'w-full text-white mt-20' : 'text-white w-full bg-white'}>{graphToggle ? <BarGraph /> : <Instruction instruction={instruction}/>}</div>

  )
}

export default ContentBody