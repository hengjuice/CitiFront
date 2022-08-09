import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Display from './components/Display/display'
import ReactDOM from 'react-dom/client';
import CalendarGrid from './components/Calendar/calendar';
import Grid from '@mui/material/Grid'; // Grid version 1
import ResponsiveAppBar from './components/Nav/nav';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Appointments" element={<CalendarGrid />} />
      </Routes>
    </div>
  );
}

export default App;

