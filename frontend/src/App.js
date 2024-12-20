import React from 'react';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import OptionsSection from './components/OptionSection';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        Spotify Mixer
      </header>
      <div className="app-body">
        <Sidebar />
        <div className="main-content">
        <MainSection />
        </div>
        <div className="options-wrapper">
          <OptionsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
