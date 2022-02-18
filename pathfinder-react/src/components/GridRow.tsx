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
    <div className="grid-row">
      {
        Array.from(Array(props.numCells).keys()).map(
          key => <div 
                    data-x={key} 
                    data-y={props.rowId} 
                    key={key} 
                    style={{userSelect: "none", height: "100%", width: props.cellWidth, border: "1px dotted gray", display: "flex", justifyContent: "center", alignItems: "center"}} 
                    onMouseDown={clickCell}
                    onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                      if (event.buttons == 1) {
                        const x = parseInt(event.currentTarget.getAttribute("data-x")!)
                        const y = parseInt(event.currentTarget.getAttribute("data-y")!)

                        props.pathEngine.onCellClicked(x, y)
                      }
                    }}>
                  </div>
        )
      }
    </div>
  )
}

export default GridRow