import React from 'react';
import './App.css';
import ControlBar from './components/controls/ControlBar';
import GridView from './components/GridView';

function App() {
  return (
    <div className="App">
      <ControlBar className="control-bar"></ControlBar>
      <GridView></GridView>
    </div>
  );
}

export default App;
