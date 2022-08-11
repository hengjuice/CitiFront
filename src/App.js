import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Display from './components/Display/display'
import ReactDOM from 'react-dom/client';
import CalendarGrid from './components/Calendar/calendar';
import Grid from '@mui/material/Grid'; // Grid version 1
import Home from './components/Home/Home';
import SignIn from './components/Home/Login';
import BankerHome from './components/Banker/bankerhome';
import ClientHome from './components/Client/clienthome';
import ClientAppointment from './components/Client/clientappointments';
import BankerAppointment from './components/Banker/bankerappointments';
import Logout from './components/Home/Logout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Manage%20Appointments" element={<BankerAppointment />} />
        <Route path="/Book%20Appointments" element={<ClientAppointment />} />
        <Route path="/BankerHome" element={<BankerHome />} />
        <Route path="/ClientHome" element={<ClientHome />} />
      </Routes>
    </div>
  );
}

export default App;

