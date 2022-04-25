import React from 'react'
import BarGraph from '../graph/BarGraph';
import Instruction from '../instruction/Instruction';

const ContentBody = ({ graphToggle, instruction, stepHandler, loading }) => {
  return (
    <div className={graphToggle  ? 'w-full text-white mt-20' : 'text-white bg-primary w-full'}>{graphToggle ? <BarGraph /> : <Instruction stepHandler={stepHandler} instruction={instruction} loading={loading}/>}</div>

  )
}

export default ContentBody