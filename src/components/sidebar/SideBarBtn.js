import React from 'react'

const SideBarBtn = ({ icon, btnFunction, btnCondition }) => {
  return (
    <div>
      <button
        onClick={btnFunction} 
        className={btnCondition ? "clicked-btn-icon" : "btn-icon"}
        
        >
        {icon}
      </button>
    </div>
  )
}

export default SideBarBtn