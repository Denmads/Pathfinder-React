import React, { ChangeEvent } from 'react'
import { PropsWithEngine } from '../../../App'

export interface AlgoSelectProps {
  marginRight?: string
}

function AlgorithmSelector(props: AlgoSelectProps & PropsWithEngine) {

  function setAlgo(event: ChangeEvent<HTMLSelectElement>) {
    props.pathEngine.setSelectedAlgorithm(event.target.value)
  }

  return (
    <select onChange={setAlgo} style={{marginRight: props.marginRight ? props.marginRight : '0px'}}>
        <option value="" disabled selected>Select Algorithm</option>
    </select>
  )
}

export default AlgorithmSelector