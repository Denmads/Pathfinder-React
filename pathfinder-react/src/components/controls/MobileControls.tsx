import React, { useState } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { FaStepForward, FaStop } from 'react-icons/fa'
import AlgorithmSelector from './inputs/AlgorithmSelector'
import CircleButton from './inputs/CircleButton'
import MobileSidebar from './MobileSidebar'
import {BiMenu} from 'react-icons/bi'
import { PropsWithEngine } from '../../App'

function MobileControls(props: PropsWithEngine) {

  const [showMenu, setShowMenu] = useState(false)

  const toggleBar = (event: React.MouseEvent<SVGElement>) => {
    setShowMenu(!showMenu)
  }

  return (
    <>
        <BiMenu size="1.5em" style={{cursor: "pointer"}} onClick={toggleBar}></BiMenu>

        <p className="name"><b>Path</b>Finder</p>
        <div className="control-group" style={{marginRight: 0}}>
            <CircleButton height="60%" backgroundColor="#538d22" highlight="#73a942" pressed="#219637" onClick={() => props.pathEngine.run()}>
                <BsPlayFill size="1em"></BsPlayFill>
            </CircleButton>
            <CircleButton height="60%" onClick={() => props.pathEngine.step()}>
                <FaStepForward size="0.7em" ></FaStepForward>
            </CircleButton>
            <CircleButton height="60%" backgroundColor="#df7373" highlight="#e39695" pressed="#ce414f" onClick={() => props.pathEngine.stop()}>
                <FaStop size="0.7em"></FaStop>
            </CircleButton>
        </div>
      <MobileSidebar pathEngine={props.pathEngine} show={showMenu} setShowMenu={setShowMenu}></MobileSidebar>
    </>
  )
}

export default MobileControls