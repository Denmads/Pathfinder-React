import React from 'react'
import './controls.css'
import AlgorithmSelector from './inputs/AlgorithmSelector'
import CircleButton from './inputs/CircleButton'
import {BsPlayFill} from 'react-icons/bs'
import {FaStepForward, FaStop} from 'react-icons/fa'
import Dropdown from './inputs/Dropdown'
import ToolSelector from './inputs/ToolSelector'

function DesktopControls() {
    const layouts = [
        {
            name: "Item 1",
            value: "1"
        },
        {
            name: "Item 2",
            value: "2"
        },
        {
            name: "Item 3",
            value: "3"
        },
    ]

    const log = (s: string) => {
        console.log(s)
    }

  return (
    <>
        <p className="name"><b>Path</b>Finder</p>
        <div className="control-group">
            <Dropdown items={layouts} onSelect={log} btnText="Generate Layout"></Dropdown>
            <ToolSelector></ToolSelector>
        </div>
        <div className="control-group">
            <AlgorithmSelector marginRight="25px"></AlgorithmSelector>
            <CircleButton height="60%" backgroundColor="#538d22" highlight="#73a942" pressed="#219637">
                <BsPlayFill size="1em"></BsPlayFill>
            </CircleButton>
            <CircleButton height="60%">
                <FaStepForward size="0.7em"></FaStepForward>
            </CircleButton>
            <CircleButton height="60%" backgroundColor="#df7373" highlight="#e39695" pressed="#ce414f">
                <FaStop size="0.7em"></FaStop>
            </CircleButton>
        </div>
    </>
  )
}

export default DesktopControls