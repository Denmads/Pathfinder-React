import React from 'react'
import {IoMdClose} from 'react-icons/io'
import AlgorithmSelector from './inputs/AlgorithmSelector'
import ToolSelector from './inputs/ToolSelector'

export interface SidebarProps {
    show: boolean,
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileSidebar(props: SidebarProps) {
  return (
    <div className="mobile-menu" style={{display: props.show ? 'flex' : 'none'}}>
        <div style={{width:"90%", display: 'flex', justifyContent: "flex-start"}}>
            <IoMdClose size="1.5em" onClick={()=>props.setShowMenu(false)}></IoMdClose>
        </div>
        <p className="name"><b>Path</b>Finder</p>

        <div className="menu-group">
          <AlgorithmSelector></AlgorithmSelector>
          <ToolSelector></ToolSelector>
          <h3>Layouts</h3>
        </div>
    </div>
  )
}

export default MobileSidebar