import React from 'react'

export interface AlgoSelectProps {
  marginRight?: string
}

function AlgorithmSelector(props: AlgoSelectProps) {
  return (
    <select style={{marginRight: props.marginRight ? props.marginRight : '0px'}}>
        <option value="" disabled selected>Select Algorithm</option>
    </select>
  )
}

export default AlgorithmSelector