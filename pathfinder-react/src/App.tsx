import React, { useEffect } from 'react';
import './App.css';
import ControlBar from './components/controls/ControlBar';
import GridView from './components/GridView';
import PathfinderEngine from './logic/PathfinderEngine';

export interface PropsWithEngine {
  pathEngine: PathfinderEngine
}

function App() {

  const engine = new PathfinderEngine();

  const keydownHandle = (event: KeyboardEvent) => {
    
    switch (event.key) {
      case "q":
        engine.setSelectedTool("wall", true)
        event.preventDefault()
        break
      case "w":
        engine.setSelectedTool("start", true)
        event.preventDefault()
        break
      case "e":
        engine.setSelectedTool("end", true)
        event.preventDefault()
        break
      case "r":
        engine.setSelectedTool("weight", true)
        event.preventDefault()
        break
      case "t":
        engine.setSelectedTool("erase", true)
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
      <ControlBar pathEngine={engine} className="control-bar"></ControlBar>
      <GridView pathEngine={engine}></GridView>
    </div>
  );
}

export default App;
