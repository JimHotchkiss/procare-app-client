import React from 'react'
import SideBarBtn from './SideBarBtn'
import { AiOutlineCloudServer } from "react-icons/ai"
import { VscGraphLine } from "react-icons/vsc"
import { DiAtom } from "react-icons/di"

const Sidebar = ({ btnFunction, btnCondition}) => {
  return (
    <div className='h-screen sticky top-0 left-0 py-4 w-40 bg-secondary'>
       <SideBarBtn
        btnFunction={btnFunction} 
        btnCondition={btnCondition}
        icon={<VscGraphLine size={40}/>}
      
       
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