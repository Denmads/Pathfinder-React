import React, { useEffect } from 'react';
import './App.css';
import ControlBar from './components/controls/ControlBar';
import GridView from './components/GridView';
import Globals from './globals'

function App() {

  const keydownHandle = (event: KeyboardEvent) => {
    
    switch (event.key) {
      case "q":
        Globals.engine.setSelectedTool("wall", true)
        event.preventDefault()
        break
      case "w":
        Globals.engine.setSelectedTool("start", true)
        event.preventDefault()
        break
      case "e":
        Globals.engine.setSelectedTool("end", true)
        event.preventDefault()
        break
      case "r":
        Globals.engine.setSelectedTool("weight", true)
        event.preventDefault()
        break
      case "t":
        Globals.engine.setSelectedTool("erase", true)
        event.preventDefault()
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keydownHandle)

    return () => {
      window.removeEventListener('keydown', keydownHandle)
    }
  }, [])

  return (
    <div className="App">
      <ControlBar className="control-bar"></ControlBar>
      <GridView ></GridView>
    </div>
  );
}

export default App;
