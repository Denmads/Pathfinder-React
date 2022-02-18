import React from 'react'
import { PropsWithEngine } from '../App';

export interface GridRowProps {
  rowId: number
  numCells: number
  cellWidth: number,
  cellHeight: number
}

function GridRow(props: GridRowProps & PropsWithEngine) {

  const clickCell = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = parseInt(event.currentTarget.getAttribute("data-x")!)
    const y = parseInt(event.currentTarget.getAttribute("data-y")!)

    props.pathEngine.onCellClicked(x, y)
  }

  return (
    <div className="grid-row" style={{height: props.cellHeight + "px"}}>
      {
        Array.from(Array(props.numCells).keys()).map(key => <div data-x={key} data-y={props.rowId} key={key} style={{height: "100%", width: props.cellWidth, border: "1px dotted gray"}} onClick={clickCell}></div>)
      }
    </div>
  )
}

export default GridRow