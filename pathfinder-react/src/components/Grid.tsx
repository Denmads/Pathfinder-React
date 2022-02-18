import React, { useEffect, useRef, useState } from 'react'
import './grid-stuff.css'
import GridRow from './GridRow';

function Grid() {
  const rows = 20;
  const columns = 20;

  const [cwidth, setCWidth] = useState(0);
  const [cheight, setCHeight] = useState(0);

  useEffect(() => {
    const el: HTMLDivElement | null = document.querySelectorAll(".grid")[0] as HTMLDivElement
    setCWidth(el.clientWidth / columns)
    setCHeight(el.clientHeight / rows)
  }, [])

  useEffect(() => {
    
  })

  return (
    <div className="grid">
      {
        Array.from(Array(rows).keys()).map(key => <GridRow key={key} rowId={key} cellWidth={cwidth} cellHeight={cheight} numCells={columns}></GridRow>)
      }
    </div>
  )
}

export default Grid