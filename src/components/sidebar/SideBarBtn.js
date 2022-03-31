import React from 'react'

const SideBarBtn = ({ icon }) => {
  return (
    <div>
      <button 
        className="btn-icon">
        {icon}
      </button>
    </div>
  )
}

export default SideBarBtn