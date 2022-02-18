import React from 'react'
import {IoMdClose} from 'react-icons/io'
import { PropsWithEngine } from '../../App'
import AlgorithmSelector from './inputs/AlgorithmSelector'
import ToolSelector from './inputs/ToolSelector'

export interface SidebarProps {
    show: boolean,
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileSidebar(props: SidebarProps & PropsWithEngine) {

  const genLayout = (event: React.MouseEvent<HTMLDivElement>) => {
      const id = event.currentTarget.getAttribute('data-id')!
      props.pathEngine.runLayoutGenerator(id)
  }

  return (
    <div className="mobile-menu" style={{display: props.show ? 'flex' : 'none'}}>
        <div style={{width:"90%", display: 'flex', justifyContent: "flex-start"}}>
            <IoMdClose size="1.5em" onClick={()=>props.setShowMenu(false)}></IoMdClose>
        </div>
        <p className="name"><b>Path</b>Finder</p>

        <div className="menu-group">
          <AlgorithmSelector pathEngine={props.pathEngine}></AlgorithmSelector>
          <ToolSelector pathEngine={props.pathEngine}></ToolSelector>
          <h3>Layouts</h3>
            <div className="buttons">
              {
                props.pathEngine.getAllLayouts().map(l => <div data-id={l.id} onClick={genLayout} className="btn-gen">{l.name}</div>)
              }
            </div>
        </div>
    </div>
  )
}

export default MobileSidebar