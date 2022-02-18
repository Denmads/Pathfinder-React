import React, { useEffect, useRef, useState } from 'react'
import { PropsWithEngine } from '../App';
import './grid-stuff.css'
import GridRow from './GridRow';

function Grid(props: PropsWithEngine) {
  const rows = 20;
  const columns = 20;

  const [cwidth, setCWidth] = useState(0);
  const [cheight, setCHeight] = useState(0);

  useEffect(() => {
    const el: HTMLDivElement | null = document.querySelectorAll(".grid")[0] as HTMLDivElement
    setCWidth(el.clientWidth / columns)
    setCHeight(el.clientHeight / rows)
    props.pathEngine.makeGrid(rows, columns);

    const cells = document.querySelectorAll("[data-x]")
    cells.forEach((cell) => {
      const x = parseInt(cell.getAttribute("data-x")!)
      const y = parseInt(cell.getAttribute("data-y")!)

      props.pathEngine.newCell(cell as HTMLDivElement, x, y);
    })
  }, [])

  return (
    <div className="grid">
      {
        Array.from(Array(rows).keys()).map(key => <GridRow pathEngine={props.pathEngine} key={key} rowId={key} cellWidth={cwidth} cellHeight={cheight} numCells={columns}></GridRow>)
      }
    </div>
  )
}

export default Grid