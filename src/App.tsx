import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      {/* allows react router access to child paths */}
      <Outlet />
    </div>
  );
}

export default App;
