import React from 'react'

export interface GridRowProps {
  rowId: number
  numCells: number
  cellWidth: number,
  cellHeight: number
}

function GridRow(props: GridRowProps) {

  const clickCell = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = event.currentTarget.getAttribute("data-x")
    const y = event.currentTarget.getAttribute("data-y")

    console.log(x + " | " + y);
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