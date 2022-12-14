import React from 'react';
import './App.css';
import LoadingScreen from './Components/LoadingScreen';
import Particles from './Components/Particles';
import Main from './Page/Main';

function App() {
  return (
    <div className="ElMariana">
      <Particles/>
      <LoadingScreen/>
      <Main/>
    </div>
  );
}

export default App;
