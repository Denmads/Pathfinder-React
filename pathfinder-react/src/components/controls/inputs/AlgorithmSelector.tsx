import React, { ChangeEvent } from 'react'
import Globals from '../../../globals'

export interface AlgoSelectProps {
  marginRight?: string
}

function AlgorithmSelector(props: AlgoSelectProps) {

  function setAlgo(event: ChangeEvent<HTMLSelectElement>) {
    Globals.engine.setSelectedAlgorithm(event.currentTarget.value)
  }

  return (
    <select onChange={setAlgo} style={{marginRight: props.marginRight ? props.marginRight : '0px'}}>
        <option value="" disabled selected>Select Algorithm</option>
        {
            Globals.engine.getAllAlgorithms().map((algo, index) => <option key={index} value={algo.id}>{algo.name}</option>)
        }
    </select>
  )
}

export default AlgorithmSelector