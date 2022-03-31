import React from 'react'


const ContentBtn = ({ startIcon, stopIcon, btnFunction, btnCondition }) => {
  return (
    <button 
        onClick={btnFunction}
        className="btn-icon">
        {!btnCondition ? startIcon : stopIcon}
    </button>
  )
}

export default ContentBtn