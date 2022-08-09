import React from 'react';
import Navbar from './Navbar.js';
import Calendar from './Calendar'
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Citi</h1>
      </div>
    </div>
  );
}

export default App;
