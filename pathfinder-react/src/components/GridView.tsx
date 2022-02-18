import React from 'react'
import { PropsWithEngine } from '../App'
import Grid from './Grid'

function GridView(props: PropsWithEngine) {
  return (
    <div className="grid-view">
      <Grid pathEngine={props.pathEngine}></Grid>
    </div>
  )
}

export default GridView