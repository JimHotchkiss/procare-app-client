import React from 'react'
import SideBarBtn from './SideBarBtn'
import { AiFillDashboard, AiOutlineCloudServer } from "react-icons/ai"
import { DiAtom } from "react-icons/di"

const Sidebar = () => {
  return (
    <div className='h-screen sticky top-0 py-4 w-40 bg-secondary'>
       <SideBarBtn 
        icon={<AiFillDashboard size={40} />}
       />
       <SideBarBtn 
        icon={<AiOutlineCloudServer size={40} />}
       />
       <SideBarBtn 
        icon={<DiAtom size={40} />}
       />
    </div>
    
  )
}

export default Sidebar