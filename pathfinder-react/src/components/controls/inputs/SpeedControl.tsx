import React from 'react'
import { PropsWithEngine } from '../../../App'
import CircleButton from './CircleButton'
import {GiFastForwardButton} from 'react-icons/gi'

function SpeedControl(props: PropsWithEngine) {
    return (
        <div>
            <CircleButton height="60%"  onClick={() => props.pathEngine.run()}>
                <GiFastForwardButton size="0.7em"></GiFastForwardButton>
            </CircleButton>
            <p>Speed: 1</p>
            <CircleButton height="60%" onClick={() => props.pathEngine.step()}>
                <GiFastForwardButton size="1em"></GiFastForwardButton>
            </CircleButton>
        </div>
    )
}

export default SpeedControl
