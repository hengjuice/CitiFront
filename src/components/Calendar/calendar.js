import React from 'react';
import ReactDOM from 'react-dom/client';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { Grid } from '@mui/material';
import { useState } from 'react';
const CalenderGrid = () => {

    const [isLoading, setLoading] = useState(false);


    return (
        <div className="calendar">
            <h1>Banker Page</h1>
            <Scheduler>
                <ViewState />
                <EditingState />
                <IntegratedEditing />
                <WeekView />
                <Appointments />
                <AppointmentForm />
            </Scheduler>
        </div>
            

    );
}

export default CalenderGrid;