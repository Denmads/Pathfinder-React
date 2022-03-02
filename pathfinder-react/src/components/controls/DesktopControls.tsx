import React from 'react'
import './controls.css'
import AlgorithmSelector from './inputs/AlgorithmSelector'
import CircleButton from './inputs/CircleButton'
import {BsPlayFill} from 'react-icons/bs'
import {FaStepForward, FaStop} from 'react-icons/fa'
import Dropdown from './inputs/Dropdown'
import ToolSelector from './inputs/ToolSelector'
import SpeedControl from './inputs/SpeedControl'
import Globals from '../../globals'

function DesktopControls() {
    const layouts = Globals.engine.getAllLayouts().map(l => ({name: l.name, value: l.id}))

    const runLayout = (s: string) => {
        Globals.engine.runLayoutGenerator(s)
    }

  return (
    <>
        <p className="name"><b>Path</b>Finder</p>
        <div className="control-group">
            <Dropdown items={layouts} onSelect={runLayout} btnText="Generate Layout"></Dropdown>
            <ToolSelector></ToolSelector>
        </div>
        <div className="control-group">
            <SpeedControl height="60%"></SpeedControl>
        </div>
        <div className="control-group">
            <AlgorithmSelector marginRight="25px"></AlgorithmSelector>
            <CircleButton height="60%" backgroundColor="#538d22" highlight="#73a942" pressed="#219637" onClick={() => Globals.engine.run()}>
                <BsPlayFill size="1em"></BsPlayFill>
            </CircleButton>
            <CircleButton height="60%" onClick={() => Globals.engine.step()}>
                <FaStepForward size="0.7em"></FaStepForward>
            </CircleButton>
            <CircleButton height="60%" backgroundColor="#df7373" highlight="#e39695" pressed="#ce414f" onClick={() => Globals.engine.stop()}>
                <FaStop size="0.7em"></FaStop>
            </CircleButton>
        </div>
    </>
  )
}

export default DesktopControls