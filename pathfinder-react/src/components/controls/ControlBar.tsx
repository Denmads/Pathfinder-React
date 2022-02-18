import React from 'react'
import { StyleProp } from '../../interfaces'
import MediaQuery from 'react-responsive'
import DesktopControls from './DesktopControls'
import MobileControls from './MobileControls'
import { PropsWithEngine } from '../../App'

//Start, stop, next step
//Select Algorithm
//Generate Layout
//Tools
//  Walls
//  Weights
//  Start
//  End

function ControlBar(props: StyleProp & PropsWithEngine) {
  return (
    <div className={props.className}>
      <MediaQuery minWidth={1024}>
        <DesktopControls pathEngine={props.pathEngine}></DesktopControls>
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <MobileControls pathEngine={props.pathEngine}></MobileControls>
      </MediaQuery>
    </div>
  )
}

export default ControlBar