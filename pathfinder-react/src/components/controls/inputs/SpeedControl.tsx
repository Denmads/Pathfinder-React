import React, { useState } from 'react'
import CircleButton from './CircleButton'
import {GiFastForwardButton} from 'react-icons/gi'
import Globals from '../../../globals'

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function SpeedControl(props: {height: string}) {

    const forceUpdate = useForceUpdate()

    const func = (increment: boolean) => {
        if (increment) {
            Globals.engine.incrementStepRate()
        }
        else {
            Globals.engine.decrementStepRate()
        }
        forceUpdate()
    }

    return (
        <div style={{display: 'flex', height: props.height, gap:'5px', alignItems: 'center'}}>
            <CircleButton height="100%"  onClick={() => func(false)}>
                <GiFastForwardButton size="0.5em"></GiFastForwardButton>
            </CircleButton>
            <p style={{whiteSpace: 'nowrap'}}>Speed: {Globals.engine.getStepRate()}</p>
            <CircleButton height="100%" onClick={() => func(true)}>
                <GiFastForwardButton size="1em"></GiFastForwardButton>
            </CircleButton>
        </div>
    )
}

export default SpeedControl
