import React from 'react'
import './controls.css'
import AlgorithmSelector from './inputs/AlgorithmSelector'
import CircleButton from './inputs/CircleButton'
import {BsPlayFill} from 'react-icons/bs'
import {FaStepForward, FaStop} from 'react-icons/fa'
import Dropdown from './inputs/Dropdown'
import ToolSelector from './inputs/ToolSelector'
import { PropsWithEngine } from '../../App'
import SpeedControl from './inputs/SpeedControl'

function DesktopControls(props: PropsWithEngine) {
    const layouts = props.pathEngine.getAllLayouts().map(l => ({name: l.name, value: l.id}))

    const runLayout = (s: string) => {
        props.pathEngine.runLayoutGenerator(s)
    }

  return (
    <>
        <p className="name"><b>Path</b>Finder</p>
        <div className="control-group">
            <Dropdown items={layouts} onSelect={runLayout} btnText="Generate Layout"></Dropdown>
            <ToolSelector pathEngine={props.pathEngine}></ToolSelector>
        </div>
        <div className="control-group">
            <SpeedControl pathEngine={props.pathEngine}></SpeedControl>
        </div>
        <div className="control-group">
            <AlgorithmSelector pathEngine={props.pathEngine} marginRight="25px"></AlgorithmSelector>
            <CircleButton height="60%" backgroundColor="#538d22" highlight="#73a942" pressed="#219637" onClick={() => props.pathEngine.run()}>
                <BsPlayFill size="1em"></BsPlayFill>
            </CircleButton>
            <CircleButton height="60%" onClick={() => props.pathEngine.step()}>
                <FaStepForward size="0.7em"></FaStepForward>
            </CircleButton>
            <CircleButton height="60%" backgroundColor="#df7373" highlight="#e39695" pressed="#ce414f" onClick={() => props.pathEngine.stop()}>
                <FaStop size="0.7em"></FaStop>
            </CircleButton>
        </div>
    </>
  )
}

export default DesktopControls