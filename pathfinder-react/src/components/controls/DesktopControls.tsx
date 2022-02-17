import React from 'react'
import './controls.css'
import AlgorithmSelector from './inputs/AlgorithmSelector'
import CircleButton from './inputs/CircleButton'
import {BsPlayFill} from 'react-icons/bs'
import {FaStepForward, FaStop} from 'react-icons/fa'

function DesktopControls() {
  return (
    <>
        <p className="name"><b>Path</b>Finder</p>
        <div className="control-group">
            
        </div>
        <div className="control-group">
            <AlgorithmSelector></AlgorithmSelector>
            <CircleButton height="60%" backgroundColor="#538d22" highlight="#73a942" pressed="#3a5a40">
                <BsPlayFill></BsPlayFill>
            </CircleButton>
            <CircleButton height="60%">
                <FaStepForward></FaStepForward>
            </CircleButton>
            <CircleButton height="60%" backgroundColor="#df7373" highlight="#e39695" pressed="#6a040f">
                <FaStop></FaStop>
            </CircleButton>
        </div>
    </>
  )
}

export default DesktopControls