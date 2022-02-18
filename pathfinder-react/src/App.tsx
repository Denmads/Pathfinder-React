import React from 'react';
import './App.css';
import ControlBar from './components/controls/ControlBar';
import GridView from './components/GridView';
import PathfinderEngine from './logic/PathfinderEngine';

export interface PropsWithEngine {
  pathEngine: PathfinderEngine
}

function App() {

  const engine = new PathfinderEngine();

  return (
    <div className="App">
      <ControlBar pathEngine={engine} className="control-bar"></ControlBar>
      <GridView pathEngine={engine}></GridView>
    </div>
  );
}

export default App;
