import React from 'react';
import Display from './components/Display/display'
import ReactDOM from 'react-dom/client';
import CalendarGrid from './components/Calendar/calendar';
import Grid from '@mui/material/Grid'; // Grid version 1

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <CalendarGrid/>
        </Grid>
        <Grid item xs={3}>
          <Display/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
